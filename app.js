const express = require('express');
const fs = require('fs');
const https = require('https');
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

https.createServer({
	key: fs.readFileSync('./ssl/key.pem'),
	cert: fs.readFileSync('./ssl/cert.pem')
}, app).listen(8080);

module.exports = app;
