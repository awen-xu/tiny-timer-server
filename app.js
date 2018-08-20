const express = require('express');
const path = require('path');


// Routers
const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registration');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
	res.send('Hello');
});
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);

app.listen(8080, () => {
	console.log('Listening on port 8080');
});

module.exports = app;
