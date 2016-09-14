package middle;

/**
 * Created by Allbts-IT on 30/08/2016.
 */
public class ArrayAlg {

    public static <T> T getMiddle(T ... a){
        return a[a.length/2];
    }


    public static void main(String[] args) {
        String s = ArrayAlg.<String>getMiddle("ab","cd","ef");
        System.out.println(s);

        double middle = ArrayAlg.getMiddle(3.14, 1.723, 0.5);
    }
}
