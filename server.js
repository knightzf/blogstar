//this is only for production
//development uses webpack which is a node server itself

// To deploy the project, it requires package.json to install the Modules
// so usually just upload everything to production Server
// can choose to create bundle file on prod server
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/build/index.html'));
});

app.listen(port);
console.log('Server started at ' + port);
