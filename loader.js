let parent = document.querySelector(".parentforload");
let appear = document.querySelector(".appear");
let num = 0;
let interval = setInterval(() => {
    num++;
    if (num == 5) {
        parent.classList.add("none");
        appear.classList.remove("appear");
    }
}, 700)