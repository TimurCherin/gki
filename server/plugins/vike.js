import fs from 'fs';
import path, { dirname } from 'path';

import { fileURLToPath } from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const root = `${dir}/../..`;
// console.log(root)

import { renderPage } from 'vike/server';

const isProduction = process.env.NODE_ENV === 'production';
const isAdmin = process.env.NODE_ENV === 'admin';

// console.log(isProduction)
async function plugin(fastify, opts) {
  if (!isProduction) {
    // We instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We instantiate it only in development. (It isn't needed in production and it
    // would unnecessarily bloat our production server.)
    const dir1 = process.cwd();

    const vite = await import('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root: `${dir1}${isAdmin ? '/admin' : ''}`,
        server: {
          middlewareMode: true,
        },
      })
    ).middlewares;

    // this is middleware for vite's dev server
    fastify.addHook('onRequest', async (request, reply) => {
      if (isAdmin && !request.user && false) return reply.redirect('/login');
      const next = () => new Promise((resolve) => {
        viteDevMiddleware(request.raw, reply.raw, () => resolve());
      });
      await next();
      return null;
    });
  }

  /* fastify.get('/login', async (request, reply) => {
    const filePath = path.join(root, 'server/templates/pt/login.html');
    reply.cacheControl('max-age', '1d');
    const stream = fs.createReadStream(filePath);
    return stream;
  }); */
  async function staticFile(req, reply) {
    debugger;
    const assetsDir = req.hostname.startsWith('admin.') ? 'admin/dist' : 'dist/client';
    const filePath = path.join(root, assetsDir, req.url);
    const ext = path.extname(filePath);
    const mime = {
      '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'application/font-woff', '.png': 'image/png', '.svg': 'image/svg+xml',
    }[ext];
    reply.cacheControl('max-age', '1d');

    const assetsPath = path.join(root, req.url);
    if (fs.existsSync(assetsPath)) {
      const stream = fs.createReadStream(assetsPath);
      return reply.type(mime).send(stream);
    }

    const stream = fs.createReadStream(filePath);
    return reply.type(mime).send(stream);
  }
  fastify.get('/assets/*', staticFile);
  fastify.get('/public/*', staticFile);

  fastify.get('*', async (req, reply) => {
    const isAdminUrl = req.hostname.startsWith('admin') || isAdmin;

    // if (!isAdminUrl && !req.user) return reply.redirect('/login');

    // admin build
    if (isAdminUrl && isProduction) {
      const stream = fs.createReadStream('admin/dist/index.html');
      return reply.type('text/html').send(stream);
    }
    if (isAdminUrl) return null; // admin vite

    // vike
    const pageContextInit = {
      urlOriginal: req.raw.url || '',
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) {
      return reply.callNotFound();
    }

    const { statusCode, headers } = httpResponse;
    headers.forEach(([name, value]) => reply.raw.setHeader(name, value));

    reply.status(statusCode);
    httpResponse.pipe(reply.raw);
    return reply;
  });
}

export default plugin;
// module.exports.options = options
