import java.util.*;
/**
 * TestPuzzling
 */
public class TestPuzzling {
    public static void main(String[] args) {
        Puzzling pJ = new Puzzling();
		
		// int[] arr1 = {3, 5, 1, 2, 7, 9, 8, 13, 25, 32};
        // ArrayList<Integer> arr = pJ.greaterThanTen(arr1);
        String[] arr2 = {"Nancy", "Jinchi", "Fujibayashi", "Momochi", "Ishikawa"};
        pJ.longNames(arr2);
        pJ.isVowel();
        pJ.genTen();
		pJ.getTenSorted(pJ.genTen());
		pJ.genRandomString();
		pJ.gen10RandString();
    }
    
}