var nodeLocation = "https://salty-taiga-38067.herokuapp.com/";
var serverLocation = "https://salty-taiga-38067.herokuapp.com/";

var invio = function () {
  var taskId = document.getElementById("taskId");
  var assignmentId = document.getElementById("assignmentId");
  var workerId = document.getElementById("workerId");
  var assignmentResult = document.getElementById("assignmentResult");

  var body={
    "taskId" : taskId.value,
    "assignmentId" : assignmentId.value,
    "workerId" : workerId.value,
    "assignmentResult" : assignmentResult.value
  };

  var url = nodeLocation + "modifica/";
  fetch(url,{
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response)=>{

    var newUrl = serverLocation + "index.html";
    document.location.href = newUrl;
  });
};
