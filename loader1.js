let parent = document.querySelector(".parentforload");
let appear1 = document.querySelector(".appear1");
let back1 = document.querySelector(".background1");
let num = 0;
let interval = setInterval(() => {
    num++;
    if (num == 5) {
        parent.classList.add("none");
        appear1.classList.remove("none");
        back1.classList.add("none");

    }
}, 800)