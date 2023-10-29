/**
 * Enter a Roman Number as input and convert it to an integer. (ex IX = 9)
 */

import java.util.HashMap;

public class RomanToInteger {
    public static void main(String[] args) {
        String romanNumeral = "IX"; // Change this to the Roman numeral you want to convert
        int result = romanToInt(romanNumeral);
        System.out.println("Roman numeral " + romanNumeral + " is equivalent to " + result);
    }

    public static int romanToInt(String s) {
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int value = romanValues.get(s.charAt(i));
            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }
            prevValue = value;
        }

        return result;
    }
}
