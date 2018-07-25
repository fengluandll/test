package lambdasinaction.chap5.my;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Square {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
        List<Integer> result =
                nums.stream()
                .map(i -> i * i)
                .collect(Collectors.toList());
        result.forEach(System.out::println);
    }
}
