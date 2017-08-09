import java.util.ArrayList;
import java.util.List;

public class Generify {
    private List strList = new ArrayList();

    public Generify() {
        strList.add("abc");
    }

    public String getString(){
        return (String) strList.get(0);
    }
}
