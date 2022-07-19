import Donut from "./Donut.js";

let donutMaker = new Donut(0,0,0,10,10);
const donutCountEl = document.querySelector("#donutCount");
const autoclickerEl = document.querySelector("#autoclicker");
const donutMultiplyEl = document.querySelector("#donutMultiply");
const autoclickCostEl = document.querySelector("#autoclickCost");
const donutMultiplyCostEl = document.querySelector("#multiplyCost");

let button = document.querySelector("#tickDonut");
button.addEventListener("click", function(){
    donutMaker.tickDonut();
    donutCountEl.innerText = donutMaker._donutCount;
    if(donutMaker._clickPower >= 2) {
        donutMaker.tickDonutMultiply();
    }
})

let autoclickerButton = document.querySelector("#autoClickPurchase");
autoclickerButton.addEventListener("click", function() {
donutCountEl.innerText = donutMaker._autoclicker;
if (donutMaker._donutCount >= donutMaker._autoclickCost) {
    donutMaker._donutCount -= donutMaker._autoclickCost;
    donutMaker._autoclickCost = Math.round(donutMaker._autoclickCost * 1.2);
    donutMaker.tickAutoClicker();
setInterval(() => {
    donutMaker.tickDonut();
    donutCountEl.innerText = donutMaker._donutCount;
    autoclickerEl.innerText = donutMaker._autoclicker;
    autoclickCostEl.innerText = donutMaker._autoclickCost;
},1000);
} else {
    alert ("You Cannot Buy This Yet!!!");
}
})

let buyMultiplyButton = document.querySelector("#buyMultiply");
buyMultiplyButton.addEventListener("click", function() {
donutCountEl.innerText = donutMaker._donutMultiply;
if (donutMaker._donutCount >= donutMaker._multiplyCost) {
    donutMaker._donutCount -= donutMaker._multiplyCost;
    donutMaker._multiplyCost = Math.round(donutMaker._multiplyCost * 1.2);
    donutMaker.tickDonutMultiply();
    donutCountEl.innerText = donutMaker._donutCount;
    donutMultiplyEl.innerText = donutMaker._donutMultiply;
    donutMultiplyCostEl.innerText = donutMaker._multiplyCost;

} else {
    alert ("You Cannot Buy This Yet!!!");
}
})

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  location.reload();
})