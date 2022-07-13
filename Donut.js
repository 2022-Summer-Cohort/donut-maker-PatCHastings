class Donut{
    constructor(donutCount, autoclicker, donutMultiply,) {
        this._donutCount = donutCount;
        this._autoclicker = autoclicker;
        this._donutMultiply = donutMultiply;
        this._autoclickCost = 10;
        this._multiplyCost = 10;
        }

    get donutCount() {
        return this._donutCount
    }
    get donutClicker() {
        return this._autoclicker
    }
    get donutMultiply() {
        return this._donutMultiply
    }

    tickDonut() {
        this._donutCount++;
    }
    buyAutoClicker() {
        if(this._donutCount>10) {
        this._autoclicker++;
        this._donutCount-=10;
        }
    }
    buyMultiply() {
        if(this._donutCount>20) {
        this._donutMultiply++;
        this._donutCount-=10;
        }
    }
    autoClickPurchase() {
        if(this._donutCount >= this._autoclickCost) {
           this._donutCount -= this._autoclickCost;
           this._autoclickCost *= 1.1;
           this._autoclicker++}
        else {
            alert("You Cannot Buy This Yet!!!")
        }
    }
}
export default Donut;