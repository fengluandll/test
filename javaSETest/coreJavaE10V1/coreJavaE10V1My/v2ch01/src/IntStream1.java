import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * Created by yunzhang on 3/4/17.
 */
public class IntStream1 {
    public static void main(String[] args) {
        IntStream stream = IntStream.of(1,1,2,3,5);
        System.out.println(stream.boxed().collect(Collectors.toList()));

        int[] values = {2,3,4};
        List<Integer> ints = Arrays.stream(values,0,2).boxed().collect(Collectors.toList());
        System.out.println(ints);
    }
}
