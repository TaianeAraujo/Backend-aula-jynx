// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function handler (request, reply) {
  
  const users = [
    { nome: "Taiane", idade: 36, Profissão: "QA"},
    { nome: "Jorge",  idade: 24, Profissão: "Mecânico"},
];

return users;
    
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}