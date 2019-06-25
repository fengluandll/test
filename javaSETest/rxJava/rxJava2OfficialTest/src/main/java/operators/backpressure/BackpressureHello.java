//package operators.backpressure;
//
//import io.reactivex.processors.PublishProcessor;
//import io.reactivex.schedulers.Schedulers;
//
//public class BackpressureHello {
//    public static void main(String[] args) throws InterruptedException {
//        PublishProcessor<Integer> source = PublishProcessor.create();
//        source
//                .observeOn(Schedulers.computation())
//                .subscribe(v -> compute(v), Throwable::printStackTrace, ()-> {}, disposable -> );
//
//        for (int i = 0; i < 1_000_000; i++) {
//            source.onNext(i);
//        }
//
//        Thread.sleep(10_000);
//    }
//
//    private static void compute(Integer v) {
//    }
//}
