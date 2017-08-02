
public class Gorilla extends Mammal{
	
	public void throwSomething() {
		System.out.println("I have thrown something");
		energyLevel -= 5;
	}
	public void eatSomething() {
		System.out.println("I have eaten something");
		energyLevel += 10;
	}
	public void climbSomething() {
		System.out.println("I have climbed something");
		energyLevel -= 10;
	}
}
