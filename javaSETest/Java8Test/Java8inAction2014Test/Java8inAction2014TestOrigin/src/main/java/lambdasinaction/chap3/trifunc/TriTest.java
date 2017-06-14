package lambdasinaction.chap3.trifunc;

import java.awt.*;

public class TriTest {
    public static void main(String[] args) {
        TriFunction<Integer,Integer,Integer,Color> tri = Color::new;
    }
}
