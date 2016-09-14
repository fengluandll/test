/**
 * Created by Allbts-IT on 14/09/2016.
 */
public class Max {
    public static void main(String... args) {
        double m = max(3.1, 40.4, -5);
        System.out.printf("%d %s\n", new Object[] { new Integer(1), "widgets" } );
        System.out.printf("The largest value is %.1f",m);
    }

    public static double max(double... values){
        double largest = Double.NEGATIVE_INFINITY;
        for (double v : values) {
            if (v > largest) largest = v;
        }
        return largest;
    }
}
