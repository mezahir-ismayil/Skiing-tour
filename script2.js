let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


let modal2 = document.querySelector(".parent");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let span2 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
  modal2.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}