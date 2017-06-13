import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class InputTest {

    public static void main(String[] args) throws IOException {

        Path inputFile = Paths.get("input.txt");
        Path outputFile = Paths.get("output.txt");
        BufferedReader reader = Files.newBufferedReader(inputFile, Charset.defaultCharset());
        BufferedWriter writer = Files.newBufferedWriter(outputFile,Charset.defaultCharset());
        String lineFromFile = "";

        while ( (lineFromFile = reader.readLine()) != null ) {
            writer.append(lineFromFile);
        }

//        System.out.println(Runtime.getRuntime().totalMemory());
    }
}
