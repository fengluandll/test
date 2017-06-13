package lambdasinaction.chap4;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by YunZhang on 13/6/17.
 */
public class MenuStream {
    public static void main(String[] args) {
        List<String> lowCaloriesDishName = Dish.menu.parallelStream()
                .filter(d -> d.getCalories() < 400)
                .sorted(Comparator.comparing(Dish::getCalories))
                .map(Dish::getName)
                .collect(Collectors.toList());
        System.out.println(lowCaloriesDishName);
    }
}
