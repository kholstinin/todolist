import { JSONFilePreset } from 'lowdb/node'

const db = await JSONFilePreset('db.json', { todos: [] });

export function initRoutes(fastify) {
  fastify.get('/api/v1/todos', async function handler(request, reply) {
    await db.read();
    return db.data.todos;
  });

  fastify.post('/api/v1/add', async function handler(request) {
    const post = JSON.parse(request.body);
    db.data.todos.push(post);

    await db.write();
  });

  fastify.get('/api/v1/check/:id', async function handler(request) {
    const
      { id } = request.params,
      todoItem = db.data.todos.filter((item) => item.id === id)[0];

    todoItem.checked = !todoItem.checked;

    await db.write();
  });

  fastify.post('/api/v1/delete', async function handler(request) {
    const
      post = JSON.parse(request.body),
      idForDelete = post.id;

    db.data.todos = db.data.todos.filter((item) => item.id !== idForDelete);

    await db.write();
  });
}
