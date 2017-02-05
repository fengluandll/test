/**
 * Created by YunZhang on 5/2/17.
 */
public class DivideByZero {
    public static void main(String[] args) {

        double x=0;
        try {
            x = 1/0;
        } catch (Exception e) {
            System.out.println("excep: " + x);//=>0.0
        } finally {
            System.out.println("final: " + x);//=>0.0
        }


        System.out.println(2.0 - 1.1);
    }
}
