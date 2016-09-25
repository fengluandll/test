/**
 * Created by Allbts-IT on 25/09/2016.
 */
public class ForName {
    public static void main(String[] args) {
        String className = "java.util.Random";
        try {
            Class cl = Class.forName(className);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }
}
