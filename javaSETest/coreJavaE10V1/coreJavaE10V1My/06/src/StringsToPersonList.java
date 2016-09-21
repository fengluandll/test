import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by Allbts-IT on 21/09/2016.
 */

class Person{
    private String name;
    public Person(String name){
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Person{");
        sb.append("name='").append(name).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

public class StringsToPersonList {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Yun Zhang");
        names.add("Boyang Lu");
        Stream<Person> stream = names.stream().map(Person::new);
        List<Person> people = stream.collect(Collectors.toList());
        System.out.println(people);
    }
}
