import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Created by Allbts-IT on 28/09/2016.
 */
public class PathsTest {
    public static void main(String[] args) {
        Path path = Paths.get("C:","program2","tool");
        System.out.println(path);
    }
}
