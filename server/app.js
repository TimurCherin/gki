import config from './config.js';

export default async function (fastify, opts) {
  const prefix = config.prefix || '/api';

  // core
  fastify.register(import('./plugins/hook.js'));
  fastify.register(import('./plugins/sensible.js'));
  // fastify.register(import('@opengis/fastify-table'), config);
  fastify.register(import('./plugins/vike.js'));

  // API
  fastify.register(import('./routes/root.mjs'));
}
