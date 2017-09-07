import java.util.logging.Level;
import java.util.logging.Logger;

public class BasicLog {
    public static void main(String[] args) {
        Logger.getGlobal().info("Basic logging");
        Logger.getGlobal().setLevel(Level.OFF);
    }
}
