import javax.swing.*;

/**
 * Created by Allbts-IT on 21/09/2016.
 */
public class TimedPrint2 {
    public static void main(String[] args) throws InterruptedException {
        Timer t = new Timer(1000, System.out::println);
        t.start();
        Thread.sleep(6000);
    }
}
