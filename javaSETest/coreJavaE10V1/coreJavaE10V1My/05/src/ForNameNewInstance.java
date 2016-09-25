import java.util.Random;

/**
 * Created by Allbts-IT on 25/09/2016.
 */
public class ForNameNewInstance {
    public static void main(String[] args) {
        String s = "java.util.Random";
        try {
            Object m = Class.forName(s).newInstance();
            Random random = (Random) m;
            System.out.println(random.nextInt());
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
