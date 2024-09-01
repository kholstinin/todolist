import Fastify from 'fastify'
import cors from '@fastify/cors'

import { initRoutes } from './routes.js';

const fastify = Fastify({
  logger: true
});

await fastify.register(cors, {
  origin: '*'
});

initRoutes(fastify);

fastify.listen({ port: 4000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
