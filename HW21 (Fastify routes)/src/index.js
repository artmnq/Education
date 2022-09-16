import Fastify from 'fastify';

import { users } from './users';

const fastify = Fastify({
  logger: true,
});
fastify.register(import('@fastify/cors'));
fastify.register(import('@fastify/multipart'), {
  addToBody: true,
});
fastify.register(import('@fastify/cookie'));

fastify.post('/uppercase', (request, reply) => {
  const textToUppercase = request.body.toUpperCase();
  if (textToUppercase.includes('FUCK')) {
    return reply.status(403).send(`unresolved`);
  }
  return reply.status(200).send(textToUppercase);
});

fastify.post('/lowercase', (request, reply) => {
  const textToLowercase = request.body.toLowerCase();
  if (textToLowercase.includes('fuck')) {
    return reply.status(403).send(`unresolved`);
  }
  return reply.status(200).send(textToLowercase);
});

fastify.get('/user/:id', (request, reply) => {
  const { id } = request.params;
  if (users[id]) {
    return reply.send(users[id]);
  }
  reply.status(400).send('User not exist');
});

fastify.get('/users', (request, reply) => {
  const { filter, value } = request.query;
  if (!filter && !value) {
    return reply.send(Object.values(users));
  }
  return reply.send(
    Object.values(users).filter((user) => String(user[filter]) === value)
  );
});

export default fastify;
