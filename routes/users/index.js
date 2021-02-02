'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const {
      query
    } = request;
    reply.send(fastify.usersGet(query));
  })
}