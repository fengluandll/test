import java.util.Arrays;
import java.util.Comparator;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class PeopleCompareByName {

    public static void main(String[] args) {
        Person[] people = {new Person("yun zhang"),new Person("abc")};
        Arrays.sort(people, Comparator.comparing(Person::getName));
        //Arrays.sort();
    }

}

