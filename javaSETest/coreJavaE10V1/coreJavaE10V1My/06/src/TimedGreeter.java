import javax.swing.*;

/**
 * Created by Allbts-IT on 21/09/2016.
 */

public class TimedGreeter extends Greeter {
    public void greet() {
        Timer t = new Timer(1000, super::greet);
        t.start();
    }

    public static void main(String[] args) {
        new TimedGreeter().greet();
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
