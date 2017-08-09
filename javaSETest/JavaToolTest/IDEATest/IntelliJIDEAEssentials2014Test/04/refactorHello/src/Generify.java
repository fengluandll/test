import java.util.ArrayList;
import java.util.List;

public class Generify extends A {
    private List<String> strList = new ArrayList<>();

    public Generify() {
        strList.add("abc");
        if (strList != null) {

        }
    }

    public String getString() {
        return strList.get(0);
    }
}
