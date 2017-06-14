package lambdasinaction.chap3;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class CompareTest {
    public static void main(String[] args) {
        List<Apple> inventory = Arrays.asList(new Apple(80,"green"), new Apple(155, "green"), new Apple(120, "red"));
        inventory.sort(Comparator.comparing(Apple::getWeight));
        System.out.println(inventory);
    }
}
