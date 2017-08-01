/**
 * SLLTest
 */
public class SLLTest {
    public static void main(String[] args) {
        SLL sll = new SLL();
        sll.add(3);
        sll.add(4);
        sll.add(10);
        sll.add(5);
        sll.add(15);
        sll.add(2);
        sll.removeAt(2);
        sll.removeAt(200);
        sll.remove();
        sll.printValues();
    }
}