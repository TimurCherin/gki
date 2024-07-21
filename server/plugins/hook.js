import fp from 'fastify-plugin';
import fs from 'fs';
import config from '../config.js';

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

async function plugin(fastify) {
  fastify.decorate('config', config);

  // pre Request
  fastify.addHook('onRequest', async (req) => {
    req.funcs = fastify;
    const { user } = req.session?.passport || {};
    req.user = user;
  });

  // preSerialization
  fastify.addHook('preSerialization', async (req, reply, payload) => {
    if (req.url.includes('/suggest/') && !req.query.json) {
      return payload?.data;
    }
    if (payload.redirect) {
      return reply.redirect(payload.redirect);
    }
    if (reply.sent) {
      return null;
    }

    if (['200', '400', '500', '403', '404'].includes(payload.status)) {
      reply.status(payload.status);
    }
    /* if (payload.headers) {
      reply.headers(payload.headers);
    } */
    if (payload.buffer) {
      return payload.buffer;
    }
    if (payload.file) {
      // const buffer = await readFile(payload.file);
      // return reply.send(buffer);
      const stream = fs.createReadStream(payload.file);
      return stream;
      // return reply.send(stream);
    }

    if (payload.message) {
      return payload.message;
    }
    return payload;
  });

  //  preValidation
  fastify.addHook('preValidation', async (req) => {
    const parseRawBody = ['POST', 'PUT'].includes(req.method) && req.body && typeof req.body === 'string'
      && req.body.trim(/\r\n/g).startsWith('{')
      && req.body.trim(/\r\n/g).endsWith('}');
    if (parseRawBody) {
      try {
        req.body = JSON.parse(req.body || '{}');
      }
      catch (err) {
        // throw new Error('invalid body');
        // return { error: 'invalid body', status: 400 };
      }
    }
  });

  // allow upload file
  const kIsMultipart = Symbol.for('[FastifyMultipart.isMultipart]');
  fastify.addContentTypeParser('multipart', (request, _, done) => {
    request[kIsMultipart] = true;
    done(null);
  });

  // parse Body
  function contentParser(req, body, done) {
    const parseBody = decodeURIComponent(body.toString()).split('&').reduce((acc, el) => {
      const [key, val] = el.split('=');
      return { ...acc, [key]: val };
    }, {});
    done(null, parseBody);
  }

  fastify.addContentTypeParser('application/x-www-form-urlencoded', { parseAs: 'buffer' }, contentParser);
}

export default fp(plugin);
