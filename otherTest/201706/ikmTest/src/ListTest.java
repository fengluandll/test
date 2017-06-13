import java.util.ArrayList;
import java.util.List;

public class ListTest {

    public static void main(String[] args) {
        List<?> myList = new ArrayList<String>();
        System.out.println(Runtime.getRuntime().totalMemory());
    }
}
