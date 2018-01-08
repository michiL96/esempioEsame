const express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", false);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if(req.method=='OPTIONS'){
    res.sendStatus(200);
  }else{
    next();
  }
});

var listaAssigments = [];
const uuid = require('uuid/v4');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var opzioni = {
    dotfiles: 'ignore', //ignora i files preceduti dal punto
    etag: false,
    fallthrough: true, //se non trova il file salta la funzione e va a quella dopo
    index: 'index.html',
    maxAge: '1d', //quanto rimane in cache
    redirect: false,
    setHeaders: function (res, path, stat) { //imposta il documento
        res.set('x-timestamp', Date.now())
    }
}
app.use(express.static(__dirname + '/docs', opzioni));


app.post('/aggiunta', function(req, res) {
  var newAssignment = {
    taskId: req.body.taskId,
    assignmentId: uuid(),
    workerId: req.body.workerId,
    assignmentResult: req.body.assignmentResult,
  };

  listaAssigments.push(newAssignment);
  console.log(listaAssigments);
  res.sendStatus(200);
});


app.get('/visualizza', function(req, res) {
  //res.header('Content-Type', 'application/json');
  //res.json(listaAssigments);
  res.send(listaAssigments);
  //res.sendStatus(200);
});


/*app.delete('/cancella/:assignmentId', function(req, res) {
  var index = -1;

  for (var i = 0; i < listaAssigments.length; i++) {
    if (assignmentId == listaAssigments[i].assignmentId) {
      index = i;
    }
  }
  var del = listaAssigments[index];
  listaAssigments.splice(index,1);
  console.log("sono qui");
  console.log("del");
  console.log(del);
  console.log("lista");
  console.log(listaAssigments);
});*/

app.delete('/cancella/:assignmentId', function (req, res) {
  //var assignment = req.body.assignmentID;
  const assignmentId = req.params.assignmentId;
  console.log(assignmentId);
  console.log("quiiiiiiiiiiiiiiiiiiiiiiiiiii");
  var index = -1;
  for(var i=0; i<listaAssigments.length; i++){
    console.log(i);
    if(listaAssigments[i].assignmentId===assignmentId){
      index = i;
      console.log("trovato");
    }

  }
  if(index>-1){
    listaAssigments.splice(index, 1);
    console.log(listaAssigments);
    res.sendStatus(200);
  }
  else{
      res.sendStatus(500);
  }
});

module.exports = app;
