package lambdasinaction.chap3;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * Created by YunZhang on 13/6/17.
 */
public class LambdaApple {
    public static void main(String[] args) {
        List<Lambdas.Apple> inventory = Arrays.asList(new Lambdas.Apple(80, "green"), new Lambdas.Apple(155, "green"), new Lambdas.Apple(120, "red"));
        Comparator<Lambdas.Apple> byWeight = (Lambdas.Apple a1, Lambdas.Apple a2) -> a1.getWeight().compareTo(a2.getWeight());
        Collections.sort(inventory,byWeight);
        System.out.println(inventory);
    }

}
