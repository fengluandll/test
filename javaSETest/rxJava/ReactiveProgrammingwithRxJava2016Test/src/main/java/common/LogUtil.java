package common;

public class LogUtil {
    public static void logWithThread(Object msg) {
        System.out.println(Thread.currentThread().getName() + ": " + msg);
    }
}
