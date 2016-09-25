package middle;

import javax.swing.*;

/**
 * Created by Allbts-IT on 24/09/2016.
 */
public class ArrayAlg {
    public static <T> T getMiddle(T... a){
        return a[a.length / 2];
    }

    public static void main(String[] args) {
        String middle = ArrayAlg.<String>getMiddle("John", "Q.", "Public");
        System.out.println(middle);

        double mid = ArrayAlg.getMiddle(3.14, 1729.0, 0.0);
        System.out.println(mid);

//        JButton jButton = ArrayAlg.getMiddle("Hello",0,null);

    }
}
