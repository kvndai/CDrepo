function Deck(){
    var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var nums = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
    this.cards = [];
    this.createDeck = function(){
        if (this.cards.length == 0){
            for (suit in suits){
                for (i in nums){
                    this.cards.push([nums[i], suits[suit]]);
                }
            }
            return this.cards;
        }
    };
}
Deck.prototype.printDeck = function(){
    for (card in this.cards){
        console.log(this.cards[card]);
    }
    return this;
}
Deck.prototype.shuffleDeck = function(){
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
Deck.prototype.dealRandomCard = function(){ // must shuffle first, will only deal 1st card in array
    if(this.cards.length > 0){
        return this.cards.shift();
    }
    else{
        return null;
    }
}
Deck.prototype.resetDeck = function(){
    var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var nums = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
    var temp;
    var i = 0;
    for (suit in suits){
        for (num in nums){
            this.cards[i] = [nums[num], suits[suit]];
            i++;
        }
    }
    return this;
}


function Player(name){
    this.name = name;
    this.hand = [];
}
Player.prototype.takeCard = function(deck_obj){
    this.hand.push(deck_obj.dealRandomCard());
    return this;
}
Player.prototype.discardCard = function(){
    this.hand.pop();
    return this;
}

var deck = new Deck();
var player = new Player('Kevin');
deck.createDeck();
deck.printDeck();
player.takeCard(deck.shuffleDeck());
deck.printDeck();
// deck.resetDeck();
// deck.printDeck();

