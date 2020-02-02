import { Router } from 'express';

const routes = new Router();
routes.get('/', (req, res) => res.json({ message: 'hello Word' }));

export default routes;
