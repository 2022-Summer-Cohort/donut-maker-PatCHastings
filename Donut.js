class Donut{
    constructor() {
        this._donutCount = 0;
        this._autoclicker = 0;
        this._donutMultiply = 0;
        this._clickPower = 1;
        this._autoclickCost = 10;
        this._multiplyCost = 10;
    
        }

    get donutCount() {
        return this._donutCount
    }
    get autoclicker() {
        return this._autoclicker
    }
    get clickPower() {
        return this._clickPower
    }
    get donutMultiply() {
        return this._donutMultiply
    }
    get autoclickCost() {
        return this._autoclickCost
    }
    get multiplyCost() {
        return this._multiplyCost
    }


    tickDonut() {
        this._donutCount += this._clickPower;
    }
    tickAutoClicker() {
        this._donutCount += 1;
        this._autoclicker+=1;
    }
    tickDonutMultiply() {
        this._donutCount += 1;
        this._donutMultiply += 1;
        this._donutCount = Math.round(this._donutCount * 1.1);
    }
    
    buyMultiply() {
        if(this._donutCount >= this._multiplyCost) {
        this._multiplyCost = this.multiplyCost * 1.3;
        
        this._donutMultiply += 1;
        // this._clickPower *= 1.2;
        this._donutCount -= this._multiplyCost;
        }
    }
    autoClickPurchase() {
        if(this._donutCount >= this._autoclickCost) {
        this._autoclickCost *= 1.1;
        this._donutCount -= this._autoclickCost;
        this._autoclicker ++;
        
        }

    }
}

export default Donut;
