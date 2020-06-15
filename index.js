const server = require('./api/server.js');
const chalk = require('chalk');

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(chalk.red.bgWhite((`Server is listening now, live on port ${port}!!!!!`)));
});