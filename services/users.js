'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('usersGet', async function (params) {
    const result = await fastify.prisma.user.findMany();
    return {
      result
    }
  })
})