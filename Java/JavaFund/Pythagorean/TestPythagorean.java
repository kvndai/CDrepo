/**
 * TestPythagorean
 */
public class TestPythagorean {
    public static void main(String[] args) {
        Pythagorean iD = new Pythagorean();
        double hypotenuse = iD.calculateHypotenuse(3, 4);
        System.out.println(hypotenuse);
    }
}