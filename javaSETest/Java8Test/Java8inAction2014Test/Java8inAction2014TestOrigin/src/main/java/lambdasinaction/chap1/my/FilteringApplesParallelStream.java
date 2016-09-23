package lambdasinaction.chap1.my;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class FilteringApplesParallelStream {

    public static void main(String ... args){

        List<Apple> inventory = Arrays.asList(new Apple(80,"green"),
                                              new Apple(155, "green"),
                                              new Apple(120, "red"));

        // [Apple{color='green', weight=155}]
        System.out.println("Heavy apples:");
        List<Apple> heavyApples = inventory.parallelStream().filter((Apple a) -> a.getWeight() > 150)
                .collect(Collectors.toList());
        System.out.println(heavyApples);
    }

    public interface Predicate<T>{
        boolean test(T t);
    }

    public static List<Apple> filterApples(List<Apple> inventory, Predicate<Apple> p){
        List<Apple> result = new ArrayList<>();
        for (Apple apple : inventory){
            if (p.test(apple)) {
                result.add(apple);
            }
        }
        return result;
    }

    public static boolean isGreenApple(Apple apple) {
        return "green".equals(apple.getColor());
    }

    public static boolean isHeavyApple(Apple apple) {
        return apple.getWeight() > 150;
    }


    public static class Apple {
        private int weight = 0;
        private String color = "";

        public Apple(int weight, String color){
            this.weight = weight;
            this.color = color;
        }

        public Integer getWeight() {
            return weight;
        }

        public void setWeight(Integer weight) {
            this.weight = weight;
        }

        public String getColor() {
            return color;
        }

        public void setColor(String color) {
            this.color = color;
        }

        public String toString() {
            return "Apple{" +
                   "color='" + color + '\'' +
                   ", weight=" + weight +
                   '}';
        }
    }

}
