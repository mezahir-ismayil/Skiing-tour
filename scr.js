let modal = document.getElementsByClassName("basketShop")[0];
let transpar = document.querySelector(".transpar");

let btn = document.getElementById("button");

let span = document.getElementsByClassName("close1");

btn.onclick = function() {
  modal.style.display = "block";
  transpar.style.display = "block";
  document.body.style.overflow = "hidden";
}

span.onclick = function() {
  modal.style.display = "none";
  transpar.style.display = "none";
}


// let modal2 = document.querySelector(".parent");

// let btn1 = document.getElementById("btn1");

// let span2 = document.getElementsByClassName("close1");

// btn1.onclick = function() {
//   modal2.style.display = "block";
// }

// span2.onclick = function() {
//   modal2.style.display = "none";
// }