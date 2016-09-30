import javax.swing.*;
import java.awt.event.ActionListener;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class LambdaThis {
    public void init()
    {
        ActionListener listener = event ->
        {
            System.out.println(this.toString());
        };
        new Timer(200,listener).start();
    }

    @Override
    public String toString() {
        return "LambdaThis";
    }

    public static void main(String[] args) throws InterruptedException {
        new LambdaThis().init();
        Thread.sleep(10000);
    }
}
