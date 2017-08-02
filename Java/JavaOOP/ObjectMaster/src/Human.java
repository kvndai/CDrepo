
public class Human {
	protected int health = 100;
	protected int strength = 3;
	protected int stealth = 3;
	protected int intelligence = 3;
	
	public void attack(Human human) {
		System.out.println("Ouch~");
		human.health -= this.strength;
	}
	public Integer displayInfo() {
		System.out.println("Health: " + this.health);
		System.out.println("Strength: " + this.strength);
		System.out.println("Stealth: " + this.stealth);
		System.out.println("Intelligence: " + this.intelligence);
		return this.health;
	}
}
