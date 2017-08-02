
public class Dragon extends Mammal {
	public Dragon() {
		this.energyLevel = 300;
	}
	public void fly() {
		System.out.println("Shoo~");
		energyLevel -= 50;
	}
	public void eatHuman() {
		energyLevel += 25;
	}
	public void attackTown() {
		System.out.println("Pew~");
		energyLevel -= 100;
	}
}
