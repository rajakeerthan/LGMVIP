function remove(){
  this.parentElement.style.display='none';
}
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  }
  else{
    document.getElementById("myInput").value = "";
    document.getElementById("myUL").appendChild(li);
    var span = document.createElement("Button");
    var txt = document.createTextNode("X");
    span.appendChild(txt);
    span.setAttribute("onclick","this.parentElement.style.display='none'");
    li.appendChild(span);
    document.getElementById("myUL").appendChild(li);
  }
}

