import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class RepeatMessage {
    public static void main(String[] args) throws InterruptedException {
        repeatMessage("Haha",100);
        Thread.sleep(2000);
    }

    public static void repeatMessage(String text, int delay) {
        ActionListener listener = event -> {
            System.out.println(text);
            Toolkit.getDefaultToolkit().beep();
        };
        new Timer(delay,listener).start();
    }
}
