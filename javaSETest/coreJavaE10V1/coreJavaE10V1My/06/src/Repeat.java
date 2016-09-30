/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class Repeat {
    public static void main(String[] args) {
        repeat(10, () -> System.out.println("Hello, World"));
    }

    private static void repeat(int i, Runnable action) {
        for (int j = 0; j < i; j++) {
            action.run();
        }
    }
}
