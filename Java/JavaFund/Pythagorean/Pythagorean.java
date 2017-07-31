import java.lang.Math;
/**
 * Pythagorean
 */
public class Pythagorean {
    public double calculateHypotenuse(int legA, int legB) {
        double hypotenuse = Math.sqrt(legA*legA + legB*legB);
        return hypotenuse;
    }
}