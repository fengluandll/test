package lambdasinaction.chap1;

import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Allbts-IT on 23/09/2016.
 */
public class AppleSort {

    public static void main(String[] args) {
        List<Apple> inventory = new LinkedList<>();
        inventory.add(new Apple(5,"red"));
        inventory.add(new Apple(1,"blue"));
        Collections.sort(inventory, new Comparator<Apple>() {
            @Override
            public int compare(Apple o1, Apple o2) {
                return o1.getWeight().compareTo(o2.getWeight());
            }
        });

        System.out.println("inventory: " + inventory);
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
