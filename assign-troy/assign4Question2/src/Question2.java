import java.util.HashSet;
import java.util.Set;
import java.util.Stack;

public class Question2 {
    public static void main(String[] args) {
        final String string = "(a{b)}";
        System.out.println("(a{b)} is " +  (isLegal(string) ? "legal" : "illegal"));
    }

    private static boolean isLegal(final String str) {
        Set<Character> brackets = new HashSet<>();
        brackets.add('(');
        brackets.add('{');
        brackets.add('[');
        brackets.add(')');
        brackets.add('}');
        brackets.add(']');

        Set<Character> rightBrackets = new HashSet<>();
        rightBrackets.add(')');
        rightBrackets.add('}');
        rightBrackets.add(']');

        Set<Character> leftBrackets = new HashSet<>();
        leftBrackets.add('(');
        leftBrackets.add('{');
        leftBrackets.add('[');

        // push all brackets of the string into a stack
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < str.length(); i++) {
            if (brackets.contains(str.charAt(i))) {
                stack.push(str.charAt(i));
            }
        }

        // the brackets must be in pair, so the number must be even
        if (stack.size() % 2 == 1) {
            return false;
        }

        Stack<Character> rightBracketStack = new Stack<>();
        while (!stack.isEmpty()) {
            final Character char1 = stack.pop();

            // if the current char is one of ),],}, put it into a stack
            if (rightBrackets.contains(char1)) {
                rightBracketStack.push(char1);
            }

            // if the current is left bracket
            if (leftBrackets.contains(char1)) {
                // the stack containing right brackets must not be empty
                if (rightBracketStack.isEmpty()) {
                    return false;
                }
                final Character rightBracket = rightBracketStack.pop();

                // if the brackets are not in pair, return false
                if (rightBracket.equals(')') && !char1.equals('(')) {
                    return false;
                }
                if (rightBracket.equals(']') && !char1.equals('[')) {
                    return false;
                }
                if (rightBracket.equals('}') && !char1.equals('{')) {
                    return false;
                }
            }
        }
        return true;
    }
}
