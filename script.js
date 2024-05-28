let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// let a = document.querySelectorAll("button");

// class Basket {
//   constructor(name,price,size) {
//     this.name = name;
//     this.price = price;
//     this.size = size;
//   }
// }


// function setIt() {
//   for(b=0; b<a.length; b++) {
//     let price = a[b].previousElementSibling.previousElementSibling.innerHTML;
//     console.log(price);
//     const myBask = new Basket("m",price,"m");
//     console.log(myBask);  
//   }
// }


// for(i=0; i<a.length; i++) {
//   function setIt() {
//       let price = a[0].previousElementSibling.previousElementSibling.innerHTML;
//       console.log(price);
//       const myBask = new Basket("m",price,"m");
//       console.log(myBask);  
// }
// a[i].addEventListener("click", setIt);
// }


// setIt();
// console.log(a[0].previousElementSibling.previousElementSibling.innerHTML);

// a.addEventListener("click", );


// let basket = [];
// let basketUl = document.querySelector('.basket ul');


// function addItem(e,e2) {
//   let item = e;
//   let img1 = e2;
//   let name = item.children[1].innerHTML;
//   let price = item.dataset.price;
//   basket.push({name,price,img1});
//   updateBas();
// }
// console.log(basket);

// function updateBas() {
//   basketUl.innerHTML = "";
//   basket.map(item=> {
//   let li = document.createElement("li");
//   li.classList.add("li");
//   item.img1.classList.add("imgjs");
//   li.innerHTML = item.name + " - " + item.price;
//   li.append(item.img1);
//   basketUl.append(li);
//   })
// }

// let allbtn = document.querySelectorAll("button");
// let imgreal = document.querySelectorAll("img");
// let img = document.createElement("img");


// allbtn.forEach(btn => {
//   btn.addEventListener("click", ()=> {
//     imgreal.forEach(imagN => {
//       img.src = imagN.src;
//       addItem(btn.parentElement,img);
//     })
//   })
// });



let basket = [];
let basketUl = document.querySelector('.basket ul');

function addItem(item) {
  let name = item.children[1].innerHTML;
  let price = item.dataset.price;
  let imgSrc = item.querySelector("img").src;  
  basket.push({ name, price, imgSrc });
  updateBasket();
}
function deleteItem(index) {
  // basket.splice(index,1);
  console.log(index);
}

let allTrash = [];

function updateBasket() {
  basketUl.innerHTML = "";
  basket.forEach(item => {
    let li = document.createElement("li");
    li.classList.add("li");
    let img = document.createElement("img");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash-can");
    icon.classList.add("trash");
    allTrash.push(icon);
    img.src = item.imgSrc;
    img.classList.add("imgjs");
    li.innerHTML = item.name + " - " + item.price;
    li.appendChild(img);
    li.appendChild(icon);
    basketUl.appendChild(li);
  });
}
// console.log(allTrash);
// console.log(allTrash[0]);
allTrash.forEach(butn => {
  //   butn.addEventListener("click", () => {
  //     deleteItem(56);
  //   });
  console.log(butn);
  });

let allbtn = document.querySelectorAll("button");





allbtn.forEach(btn => {
  btn.addEventListener("click", () => {
    let item = btn.parentElement;
    addItem(item);
  });
});


let closer = document.getElementsByClassName("closeBasket")[0];
let basketShop = document.querySelector(".basketShop");
let transparent = document.getElementsByClassName("transpar")[0];
// console.log(closer);
closer.onclick = function() {
  basketShop.style.display = "none";
  transparent.style.display = "none";
  document.body.style.overflow = "scroll";
}