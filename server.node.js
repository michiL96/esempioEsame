const app = require('./app.node.js');

var porta = 8080;
app.listen(porta, function() {
  console.log('Il server è aperto.');
});
