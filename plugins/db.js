'use strict'

const {
  PrismaClient
} = require('@prisma/client')
const fp = require('fastify-plugin')

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope
async function dbPlugin(fastify, opts, done) {
  const prisma = new PrismaClient();
  fastify.decorate('prisma', prisma)
  done();
}

module.exports = fp(dbPlugin)