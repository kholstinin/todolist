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

try {
  await fastify.listen({ port: 4000 });

} catch (err) {
  fastify.log.error(err);
  process.exit(1);
};
