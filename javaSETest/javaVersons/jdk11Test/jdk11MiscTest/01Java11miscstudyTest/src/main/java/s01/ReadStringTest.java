package s01;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class ReadStringTest {
    public static void main(String[] args) throws IOException {
        String studentFileContent = Files.readString(Path.of("student.txt"));
    }

    public static Path clazzPath2Path(String path) {
        final URL url = ClassLoader.getSystemResource(path);
        try {
            return Paths.get(url.toURI());
        } catch (URISyntaxException e) {
            throw new IllegalStateException("wrong url syntax");
        }
    }
}
