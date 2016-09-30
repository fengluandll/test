import java.util.Arrays;
import java.util.Comparator;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class PeopleCompareByName2 {

    public static void main(String[] args) {
        PersonNew[] people = {new PersonNew("yun","zhang"),new PersonNew("abc","wang")};
        Arrays.sort(people, Comparator.comparing(PersonNew::getLastName).thenComparing(PersonNew::getFirstName));
        for (PersonNew personNew : people) {
            System.out.println(personNew);
        }
    }

}

