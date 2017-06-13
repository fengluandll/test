package lambdasinaction.chap3;

/**
 * Created by YunZhang on 13/6/17.
 */
public class LambdaRunnable {
    public static void main(String[] args) {
        Runnable r1 = ()-> System.out.println("Hello,world");
        Runnable r2 = new Runnable() {
            @Override
            public void run() {
                System.out.println("Hello2");
            }
        };

        process(r1);
        process(r2);
        process(()-> System.out.println("hello3"));
    }

    public static void process(Runnable r){
        r.run();
    }
}
