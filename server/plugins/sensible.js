import fp from 'fastify-plugin';
import session from '@fastify/session';

export default fp(async (fastify, opts) => {
  fastify.register(import('@fastify/sensible'), {
    errorHandler: false,
  });

  fastify.register(import('@fastify/url-data'), {
    errorHandler: false,
  });

  fastify.register(import('@fastify/cookie'), {
    secure: false, errorHandler: false,
  });

  fastify.register(session, {
    secret: '61b820e12858570a4b0633020d4394a17903d9a9',
    name: 'session_edessb',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    // store: useStorage('redis')(),
  });

  // Буде додано в іншій версії
  // fastify.register(rateLimit, {
  //   max: config?.rateLimit?.max || 50,
  //   timeWindow: config?.rateLimit?.timeWindow || "5 minute",
  //   allowList: config?.rateLimit?.allowList || []
  // });
});
