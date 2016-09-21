import javax.swing.*;
import java.awt.event.ActionEvent;

/**
 * Created by Allbts-IT on 21/09/2016.
 */

public class TimedGreeter extends Greeter {
    @Override
    public void greet(ActionEvent event) {
        Timer t = new Timer(1000, super::greet);
        t.start();
    }

    public static void main(String[] args) {
        new TimedGreeter().greet(null);
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
