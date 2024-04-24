import { Hono } from 'hono';
import usersRoute from './routes/users';

const app = new Hono();

app.get('/', (c) => c.text('Hello Hono API'));
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404));

const routes = app.route('/users', usersRoute);

export default app;
export type AppType = typeof routes;
