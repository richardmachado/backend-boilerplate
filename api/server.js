const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const loginRouter = require('./auth/auth-router.js');
const usersRouter = require('./routes/user-routes');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// add other routes here, with middleware

server.use('/api/auth', loginRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
	res.send("Your server is up and running!");
});



module.exports = server;
