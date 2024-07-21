'use strict'

const schema = {
  querystring: {
    name: { type: 'string', pattern: "^(\\d+)$" },
    token: { type: 'string', pattern: "^(\\d+)$" },
  },
}

export default async function (fastify, opts) {
  fastify.get('/test', async function (request, reply) {
    return { root: true }
  });

}
