/**
 * Created by Allbts-IT on 30/09/2016.
 */


interface IntConsumer{
    void accept(int value);
}

public class Repeat2 {
    public static void main(String[] args) {
        repeat(10, i -> System.out.println("Countdown: " + (9-i)));
    }

    private static void repeat(int i, IntConsumer action) {
        for (int j = 0; j < i; j++) {
            action.accept(j);
        }
    }
}
