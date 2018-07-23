import java.util.stream.Stream;

public class SeqSum {

    public static void main(String[] args) {
        System.out.println(SeqSum.sequentialSum(10));
    }
    public static long sequentialSum(long n) {
        return Stream.iterate(1L, i -> i + 1)
                .limit(n)
                .reduce(0L, Long::sum);
    }
}
