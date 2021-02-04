'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const {
      query
    } = request;
    const result = await fastify.usersGet(query);
    reply.send(result);
  })
}