public class Question3 {

    public static int thisIsIterative(int n) {
        if (n < 0) {
            return -10;
        } else if (n == 0) {
            return 2;
        } else if (n == 1) {
            return 5;
        } else {
            return thisIsIterative( n - 1 ) + 3*thisIsIterative(n-2) + 2 * n;
        }
    }

    public static void main(String[] args) {
        for (int i = -10; i < 10; i++) {
            System.out.printf("thisIsIterative(%d): %d\n", i,thisIsIterative(i));
        }
    }
}
