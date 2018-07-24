import java.util.stream.Stream;

public class ParaSum {
    public static long parallelSum(long n) {
        return Stream.iterate(1L, i -> i + 1)
                .limit(n)
                .parallel()
                .reduce(0L, Long::sum);
    }

    public static void main(String[] args) {
        System.out.println(ParaSum.parallelSum(99999));
        System.out.println(Runtime.getRuntime().availableProcessors());
    }
}
