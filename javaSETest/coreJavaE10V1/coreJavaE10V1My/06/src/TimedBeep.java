import javax.swing.*;
import java.awt.*;
import java.util.Date;

/**
 * Created by Allbts-IT on 20/09/2016.
 */
public class TimedBeep {
    public static void main(String[] args) {
        Timer t = new Timer(1000, event -> {
            System.out.println("At the tone, the time is " + new Date());
            Toolkit.getDefaultToolkit().beep();
        });
        t.start();
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
