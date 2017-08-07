package model;

public class Dog extends Animal implements Pets {
	public Dog(String n, String b, double w) {
		name = n;
		breed = b;
		weight = w;
	}

	@Override
	public String showAffection() {
		if(weight < 30) {
			return name + " hopped into your lap";
		} else {
			return name + " curled up next to you";
		}
	}
}
