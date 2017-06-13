public class ThreadTest {

    public static synchronized void main(String[] args) throws InterruptedException {
        Thread requestThread = new Thread();
        requestThread.start();
        System.out.println("handle request1");

        requestThread.wait(10000);
        System.out.println("handle request2");
    }
}
