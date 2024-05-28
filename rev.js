let btnn = document.querySelector(".btnn1");
let ul = document.querySelector(".reviewUl");

for(i=0; i<localStorage.length; i++) {
    let lin = document.createElement("li");
    let keyName =  localStorage.key(i);
    lin.classList.add("li");
    lin.innerHTML = localStorage.key(i) + ": " + localStorage.getItem(keyName);
    ul.append(lin);
}

function addQext() {
    let input = document.querySelector("textarea");
    let input2 = document.querySelector(".name");
    let lis = document.createElement("li");
    lis.classList.add("li");
    localStorage.setItem(input2.value, input.value)
    let set = localStorage.getItem(input2.value);
    lis.innerHTML = input2.value + ": " + set;
    ul.append(lis);
}

btnn.addEventListener("click", addQext);
