
public class HumanTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Human h1 = new Human();
		Human h2 = new Human();
		h1.attack(h2);
		h2.displayInfo();

		Wizard w = new Wizard();
		Samurai s = new Samurai();
		Ninja n = new Ninja();
		n.steal(w);
		w.displayInfo();
		w.fireball(n);
		n.displayInfo();
		s.deathBlow(n);
		n.displayInfo();
		s.displayInfo();
		w.heal(s);
		s.displayInfo();
	}

}
