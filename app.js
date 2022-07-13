import Donut from "./Donut.js";

let donutMaker = new Donut(0,0,0);
const donutCountEl = document.querySelector("#donutCount");
const autoclickerEl = document.querySelector("#autoclicker");
let button = document.querySelector("#tickDonut");
button.addEventListener("click", function(){
    donutMaker.tickDonut();
    donutCountEl.innerText = donutMaker._donutCount;
})

let autoclickerButton = document.querySelector("#buyAutoClicker");
autoclickerButton.addEventListener("click", function(){
donutCountEl.innerText = donutMaker._autoclicker;
if (donutMaker._donutCount >= donutMaker._autoclickCost) {
setInterval(() => {
    donutMaker.tickDonut();
    donutCountEl.innerText = donutMaker._donutCount;
},1000);
}
})

let multiplierButton = document.querySelector("#donutMultiply");
multiplierButton.addEventListener("click", function() {
    donutMaker.tickDonut();
    donutCountEl.innerText = donutMaker._donutMultipy;

})