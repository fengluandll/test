package lambdasinaction.chap3;

class Abc{
    public int portNumber = 2;
}

public class RunnableTest {
    public static void main(String[] args) {
        int portNumber = 1337;
        Runnable r = () -> System.out.println(portNumber);

        r.run();

        Abc abc = new Abc();
        Runnable s = () -> System.out.println(abc.portNumber);
        abc.portNumber = 10;
        s.run();

    }
}
