public class IntTest {

    public static void main(String[] args) {
        int x = 5;
        x+=3;
        x = x >> 1;

        System.out.println(Runtime.getRuntime().totalMemory());
    }
}
