/**
 * Created by Allbts-IT on 25/09/2016.
 */

class A{

}

public class NewInstance {
    public static void main(String[] args) {
        A a = new A();
        try {
            a.getClass().newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
    }
}
