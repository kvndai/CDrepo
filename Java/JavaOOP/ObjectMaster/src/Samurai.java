public class Samurai extends Human {
    private int health = 200;
    private int counter = 0;

    public Samurai(){
        this.health = 200;
        counter++;
    }
    public void deathBlow(Human human){
        human.health = 0;
        this.health = this.health/2;
    }
    public void meditate(Human human){
        this.health += this.health/2;
    }
    public void howMany(){
        System.out.println("There are " + counter + "Samurais currently.");
    }
}
