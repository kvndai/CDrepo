class Deck{
    constructor(){
        this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        this.nums = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
        this.cards = [];
        this.createDeck()
    }
    createDeck(){
        if (this.cards.length == 0){                                    // comment out if need to create more than 1 deck
            for (var suit = 0; suit < this.suits.length; suit++){
                for (var i = 0; i < this.nums.length; i++){
                    this.cards.push([this.nums[i], this.suits[suit]]);
                }
            }
        }
    }
    printDeck(){
        for (var card = 0; card < this.cards.length; card++){
            console.log(this.cards[card]);
        }
        return this;
    }
    shuffleDeck(){
        var m = this.cards.length;
        var temp;
        var i;
        while (m){
            i = Math.floor(Math.random()*m--);
            temp = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = temp;
        }
        return this;
    }
    dealRandomCard(){                       // must shuffle first, will only deal 1st card in array
        if(this.cards.length > 0){
            return this.cards.shift();
        }
        else{
            return null;
        }
    }
    resetDeck(){
        var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        var nums = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
        var temp;
        var i = 0;
        for (var suit = 0; suit < suits.length; suit++){
            for (var num = 0; num < nums.length; num++){
                this.cards[i] = [nums[num], suits[suit]];
                i++;
            }
        }
        return this;
    }
}


class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    takeCard(deck_obj){
        this.hand.push(deck_obj.dealRandomCard());
        return this;
    }
    disCard(){
        this.hand.pop();
        return this;
    }
}


var deck = new Deck();
var player1 = new Player()
deck.printDeck();
player1.takeCard(deck.shuffleDeck());
deck.resetDeck();
deck.printDeck();