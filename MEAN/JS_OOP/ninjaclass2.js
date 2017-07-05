function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.sayName = function(){
        console.log(this.name);
        return this;
    }
    this.showStats = function(){
        console.log(`Strength: ${strength}, Speed: ${speed}`);
        return this;
    }
    this.drinkSake = function(){
        this.health += 10;
        return this;
    }
    this.punch = function(ninja){ // ninja is parameter of Ninja. ie. ninja1 punch ninja2
        if(ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(`${ninja.name} was punched by ${this.name} and lost 5HP`)
        }
        return this;
    }
    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            ninja.health -= (5*this.strength);
            console.log(`${ninja.name} was kicked by ${this.name} and lost 15HP`)
        }
        return this;
    }
}
var ninja1 = new Ninja('Hyabusa');
var ninja2 = new Ninja('Suzuki');
ninja1.punch(ninja2);
ninja1.kick(ninja2);
ninja2.punch(ninja1);
ninja2.kick(ninja2);
ninja1.punch(ninja2).kick(ninja2);
