class Donut{
    constructor(donutCount, autoclicker, donutMultiply,) {
        this._donutCount = donutCount;
        this._autoclicker = autoclicker;
        this._donutMultiply = donutMultiply;
        this._autoclickCost = 20;
        this._multiplyCost = 40;
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
        if(this._donutCount>20) {
        this._autoclicker++;
        this._donutCount-=20;
        }
    }
    buyMultiply() {
        if(this._donutCount>40) {
        this._donutMultiply++;
        this._donutCount-=40;
        }
    }
    autoClickPurchase() {
        if(this._donutCount >= this._autoclickCost) {
           this._donutCount -= this._autoclickCost;
           this._autoclickCost *= 1.1;
           this._autoclicker++}

    }
}

export default Donut;
