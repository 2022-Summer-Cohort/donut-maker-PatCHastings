class Donut{
    constructor(donutCount, autoclicker, donutMultiply,) {
        this._donutCount = donutCount;
        this._autoclicker = autoclicker;
        this._donutMultiply = donutMultiply;
        this._autoclickCost = 20;
        this._multiplyCost = 20;
        }

    get donutCount() {
        return this._donutCount
    }
    get autoclicker() {
        return this._autoclicker
    }
    get donutMultiply() {
        return this._donutMultiply
    }

    tickDonut() {
        this._donutCount++;
    }
    tickAutoClicker() {
        this._autoclicker+=1;
    }
    tickDonutMultiply() {
        this._donutMultiply+=1;
    }

    buyAutoClicker() {
        if(this._donutCount>= this._autoclickCost) {
        this._donutCount-=20;
        
        
        }
    }
    buyMultiply() {
        if(this._donutCount >= this._multiplyCost) {
        this._donutMultiply++;
        this._donutCount-=40;
        }
    }
    autoClickPurchase() {
        if(this._donutCount >= this._autoclickCost) {
           this._donutCount -= this._autoclickCost;
           this._donutCount-=20
           this._autoclickCost *= 1.1;
           this._autoclicker++}

    }
}

export default Donut;
