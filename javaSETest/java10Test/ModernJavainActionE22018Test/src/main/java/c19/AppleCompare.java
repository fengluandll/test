package c19;

import java.util.Comparator;

public class AppleCompare {
    public static void main(String[] args) {
        Comparator<Apple> c = Comparator.comparing(Apple::getWeight);
    }
}
