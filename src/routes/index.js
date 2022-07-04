import express from 'express';
export const routes = express.Router();

routes.route('/posts').all((req, res, next) => {
	console.log(
		`Request from : ${req.originalUrl}\nRequest type : ${
			req.method
		}\nRequest params : ${JSON.stringify(req.params)}`
	);
	next();
});

routes.get('/posts', (req, res) =>
	res.status(200).send(JSON.stringify([])).end()
);

routes.post('/posts', (req, res) => res.status(201).end());

routes.route('/posts/:id').all((req, res, next) => {
	console.log(
		`Request from : ${JSON.stringify(req.params)}\nRequest type : ${
			req.method
		}\nRequest id : ${req.params.id}`
	);
	next();
});

routes.get('/posts/:id', (req, res) =>
	res.status(200).send(JSON.stringify({})).end()
);

routes.put('/posts/:id', (req, res) => res.status(203).end());

routes.delete('/posts/:id', (req, res) => res.status(203).end());
