/**
 * Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z) 
 */

import java.util.HashSet;

public class Alphabet {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        System.out.println(isPangram(input));
    }

    public static boolean isPangram(String input) {
        HashSet<Character> alphabetSet = new HashSet<>();

        for (char c : input.toCharArray()) {
            if (Character.isAlphabetic(c)) {
                alphabetSet.add(Character.toLowerCase(c));
            }
        }

        return alphabetSet.size() == 26;
    }
}