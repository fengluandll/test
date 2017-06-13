import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.stream.Stream;

public class FileWrite {

    public static void main(String[] args) throws Exception {
        String fileName = "abc123.txt";
        File file = new File(fileName);
        FileWriter output = new FileWriter(file);

//        Stream.of('0','1','2','3','4').forEach(output::write);

//        for (int i = 0; i < 5; i++) {
////            output.write(String.valueOf(i));
//
//        }
        PrintWriter p = new PrintWriter(output);
        Stream.of('0','1','2','3','4').forEach(p::write);

        output.flush();
    }
}
