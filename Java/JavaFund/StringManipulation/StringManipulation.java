/**
 * StringManipulation
 */
public class StringManipulation {
    public String trimAndConcat (String str1, String str2) {
        return str1.trim() + str2.trim();
    }
    public Integer getIndexOrNull(String str1, char char1) {
        int idx = str1.indexOf(char1);
        // if idx == -1, return null, else return the idx
        return idx == -1 ? null : idx;
    }
    public Integer getIndexOrNull(String str1, String str2) {
        int idx = str1.indexOf(str2);
        // if idx == -1, return null, else return the idx
        return idx == -1 ? null : idx;
    }
    public String concatSubstring(String str1, int num1, int num2, String str2) {
        String substring = str1.substring(num1, num2);
        return substring + str2;
    }
}