package clone;

import java.util.Arrays;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class ArrayClone {
    public static void main(String[] args) {
        int[] luckyNumbers = {2, 3, 5, 7, 11, 13};
        int[] cloned = luckyNumbers.clone();
        cloned[5] = 12;
        System.out.println(Arrays.toString(luckyNumbers));
        System.out.println(Arrays.toString(cloned));
    }
}
