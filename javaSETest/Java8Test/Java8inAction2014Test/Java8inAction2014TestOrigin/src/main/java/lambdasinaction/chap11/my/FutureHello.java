package lambdasinaction.chap11.my;

import org.jetbrains.annotations.NotNull;

import java.util.Random;
import java.util.concurrent.*;

public class FutureHello {
    private static Random random = new Random(System.nanoTime());

    public static void main(String[] args) {
        ExecutorService executor = Executors.newCachedThreadPool();
        Future<Double> future = executor.submit(new Callable<Double>() {
            @Override
            public Double call() throws Exception {
                return doSomeLongComputation();
            }
        });
        System.out.println("do something");
        try {
            Double result = future.get(30, TimeUnit.SECONDS);
            System.out.println("result is " + result);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        } catch (TimeoutException e) {
            e.printStackTrace();
        }
    }

    @NotNull
    private static Double doSomeLongComputation() throws InterruptedException {
        Thread.sleep(3_000L);
        return random.nextDouble();
    }
}
