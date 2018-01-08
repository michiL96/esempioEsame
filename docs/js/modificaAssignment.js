var nodeLocation = "https://boiling-cove-42848.herokuapp.com/";
var serverLocation = "https://boiling-cove-42848.herokuapp.com/";

//var nodeLocation = "http://localhost:8080/";
//var serverLocation = "http://localhost:8080/";

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
