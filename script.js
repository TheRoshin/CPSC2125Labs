/*on HTML to when was the page last updated*/
function lastedit(){
  var lastestDate = new Date(document.lastModified);
  document.getElementById("time").innerHTML = "Last modified on: " + lastestDate;
}

/* function for change the color with button*/
function redColor(){
  document.getElementById("button").style.backgroundColor = "red";
}

function blueColor(){
  document.getElementById("button").style.backgroundColor = "blue";
}

function yellowColor(){
  document.getElementById("button").style.backgroundColor = "yellow";
}


/*test case*/
function text(){
  console.log("it is working");
}


/*calling the function*/
lastedit();
/*redColor();
greenColor();
yellowColor();*/
text();
