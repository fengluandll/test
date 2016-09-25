import java.time.LocalDate;

/**
 * Created by Allbts-IT on 24/09/2016.
 */
public class Min {
    public static <T extends Comparable> T min(T[] a){
        if (a == null || a.length == 0) return null;
        T smallest = a[0];
        for (int i = 1; i < a.length; i++)
            if (smallest.compareTo(a[i]) > 0) smallest = a[i];
        return smallest;
    }


    public static void main(String[] args) {
        LocalDate[] localDates = {LocalDate.of(2016,9,25),LocalDate.of(2000,9,25)};
        LocalDate localDate = min(localDates);
        System.out.println(localDate);
    }
}

