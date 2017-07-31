/**
 * TestStringManipulation
 */
public class TestStringManipulation {
    public static void main(String[] args) {
        StringManipulation manipulator = new StringManipulation();
        String str = manipulator.trimAndConcat("    Hello     ","     World    ");
        System.out.println(str); // HelloWorld 
    }
}