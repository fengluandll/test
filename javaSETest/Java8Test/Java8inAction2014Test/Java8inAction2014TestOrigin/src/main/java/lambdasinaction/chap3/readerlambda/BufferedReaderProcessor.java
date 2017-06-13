package lambdasinaction.chap3.readerlambda;

import java.io.BufferedReader;
import java.io.IOException;

/**
 * Created by YunZhang on 13/6/17.
 */
@FunctionalInterface
public interface BufferedReaderProcessor {
    String process(BufferedReader b) throws IOException;
}
