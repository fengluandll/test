import javax.swing.*;
import java.awt.event.ActionListener;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class CountDown {
    public static void countDown(int start, int delay)
    {
        ActionListener listener = event ->
        {
            //start--; // Error: Can't mutate captured variable
            System.out.println(start);
        };
        new Timer(delay, listener).start();
    }

    public static void repeat(String text, int count)
    {
        for (int i = 1; i <= count; i++)
        {
            ActionListener listener = event ->
            {
                //System.out.println(i + ": " + text);
// Error: Cannot refer to changing i
            };
            new Timer(1000, listener).start();
        }
    }
}
