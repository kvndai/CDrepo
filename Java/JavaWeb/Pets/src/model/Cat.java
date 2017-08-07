package model;

public class Cat extends Animal implements Pets{
	public Cat(String n, String b, double w) {
		name = n;
		breed = b;
		weight = w;
	}
	
	@Override
	public String showAffection() {
		return "Your " + breed + " cat, " + name + ", looked at your with some affection, You think!";
	}
}
