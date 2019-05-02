package s01;

import java.net.URI;
import java.nio.file.Path;

public class PathTest {
    public static void main(String[] args) {
        Path googlePath = Path.of(URI.create("www.google.com"));
        Path studentFilePath = Path.of("/home/Students/student.txt");
    }
}
