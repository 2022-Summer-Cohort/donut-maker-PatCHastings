import Donut from "./Donut.js";

let donutMaker = new Donut(0,0,0);
const donutCountEl = document.querySelector("#donutCount");
const autoclickerEl = document.querySelector("#autoclicker");
const donutMultiplyEl = document.querySelector("#donutMultiply");

let button = document.querySelector("#tickDonut");
let autoClickerTotalSpan = document.querySelector("#autoClickerTotal");

button.addEventListener("click", function(){
    donutMaker.tickDonut();
    donutCountEl.innerText = donutMaker._donutCount;
})

let autoclickerButton = document.querySelector("#autoClickPurchase");
autoclickerButton.addEventListener("click", function(){
donutCountEl.innerText = donutMaker._autoclicker;
if (donutMaker._donutCount >= donutMaker._autoclickCost) {
    donutCountEl
    donutMaker.tickAutoClicker();
setInterval(() => {
    donutMaker.tickDonut();
    donutCountEl.innerText = donutMaker._donutCount;
    autoclickerEl.innerText = donutMaker._autoclicker;
},1000);
} else {
    alert ("You Cannot Buy This Yet!!!");
}
})

let multiplierButton = document.querySelector("#buyMultiply");
multiplierButton.addEventListener("click", () => {
donutCountEl.innerText = donutMaker._donutMultipy;
if (donutMaker._donutCount >= donutMaker._multiplyCost) {
    donutMultiplyEl
    donutMaker.tickDonutMultiply();
    donutCountEl.innerText = donutMaker._donutCount;
    donutMultiplyEl.innerText = donutMaker._donutMultiply;

} else {
    alert ("You Cannot Buy This Yet!!!");
}
})