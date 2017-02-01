import java.lang.ref.Reference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by YunZhang on 1/2/17.
 */
public class Diamond {
    public static void main(String[] args) {

        List<String> list = new ArrayList<>();
        Map<Reference<Object>, Map<Integer,List<String>>> map = new HashMap<>();
    }
}
