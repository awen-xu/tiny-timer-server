const express = require('express');
const path = require('path');

const loginRouter = require('./routes/login');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
	res.send('Hello');
});
app.use('/login', loginRouter);

app.listen(8080, () => {
	console.log('Listening on port 8080');
});

module.exports = app;
