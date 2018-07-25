package lambdasinaction.chap5.my;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Pair {

    public static void main(String[] args) {
        List<Integer> numbers1 = Arrays.asList(1, 2, 3);
        List<Integer> numbers2 = Arrays.asList(3, 4);

        List<int[]> result = numbers1.stream()
                .flatMap(i -> numbers2.stream()
                        .map(j -> new int[]{i, j})
                )
                .filter(
                        array -> ( array[0] + array[1] ) % 3 == 0
                )
                .collect(Collectors.toList());
        result.forEach(i -> {
            Arrays.stream(i).forEach(System.out::print);
            System.out.println();
        });
    }
}
