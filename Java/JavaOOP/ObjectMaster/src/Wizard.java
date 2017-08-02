public class Wizard extends Human {
    private int health = 50;
    private int intelligence = 8;

    public void heal(Human human){
        human.health += this.intelligence;
    }

    public void fireball(Human human) {
        human.health -= this.intelligence*3;
    }
}
