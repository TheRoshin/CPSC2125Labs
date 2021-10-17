/*on HTML to when was the page last updated*/
function lastedit(){
  var lastestDate = new Date(document.lastModified);
  document.getElementById("time").innerHTML = "Last modified on: " + lastestDate;
}
/*test case*/
function text(){
  console.log("it is working");
}

/*calling the function*/
lastedit();
text();