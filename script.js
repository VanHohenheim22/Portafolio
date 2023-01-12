      
document.querySelector(".buttom_drop").addEventListener("click" , move_bars);

let line_1 = document.querySelector(".bar1");
let line_2 = document.querySelector(".bar2");
let line_3 = document.querySelector(".bar3");

let mov_var = document.querySelector(".nav");
function move_bars(){
    line_1.classList.toggle("click_bar1");
    line_2.classList.toggle("click_bar2");
    line_3.classList.toggle("click_bar3");

    mov_var.classList.toggle("nav_trans");
}

document.querySelector(".cls_nav").addEventListener("click", move_bars);