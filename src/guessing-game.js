class GuessingGame {
    constructor() {
        this.range = [];
        this.maxIndex;
        this.minIndex = 0;
        this.candidateIndex;
    }
    
    setRange(min, max) {
        //let range = [];
        this.maxIndex = max - min;
        this.range[0] = min;
        for (var i = 1; i <= max; i++) {
            this.range[i] = min + i;
        }      
    }

    guess() {        
        this.candidateIndex = Math.ceil((this.maxIndex+this.minIndex)/2)
        return this.range[this.candidateIndex];
    }

    lower() {
        this.maxIndex = this.candidateIndex;        
    }

    greater() {
        this.minIndex = this.candidateIndex;
    }
}

module.exports = GuessingGame;
