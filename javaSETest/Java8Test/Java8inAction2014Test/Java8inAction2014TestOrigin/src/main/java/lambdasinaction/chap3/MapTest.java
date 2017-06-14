package lambdasinaction.chap3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class MapTest {

    public static List<Apple> map(List<Integer> list, Function<Integer,Apple> f){
        List<Apple> result = new ArrayList<>();
        for (Integer e:list
             ) {
            result.add(f.apply(e));
        }
        return result;
    }

    public static void main(String[] args) {
        List<Integer> weights = Arrays.asList(7,3,4,8);
        List<Apple> apples = map(weights,Apple::new);
        System.out.println(apples);
    }
}
