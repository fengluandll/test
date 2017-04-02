import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by yunzhang on 3/4/17.
 */
public class Letters {
    public static Stream<String> letters(String s){
        List<String> result = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
            result.add(s.substring(i,i+1));
        }
        return result.stream();
    }

    public static void main(String[] args) {
        System.out.println(letters("boat").collect(Collectors.toList()));
    }
}
