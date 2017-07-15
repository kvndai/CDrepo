function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.sayName = function(){
        console.log(name);
        return this;
    }
    this.showStats = function(){
        console.log(`Strength: ${strength}, Speed: ${speed}`);
        return this;
    }
    this.drinkSake = function(){
        health += 10;
        return this;
    }
    return this;
}
var ninja1 = new Ninja('Hyabusa');
ninja1.sayName().showStats();
