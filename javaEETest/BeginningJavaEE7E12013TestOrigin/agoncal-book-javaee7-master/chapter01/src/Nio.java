import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

/**
 * Created by YunZhang on 1/2/17.
 */
public class Nio {
    public static void main(String[] args) throws IOException{
        Path path = Paths.get("source.txt");
        boolean exists = Files.exists(path);
        System.out.println("exists: " + exists);
        boolean isDirectory = Files.isDirectory(path);
        System.out.println("isDirectory: " + isDirectory);
        boolean isExecutable = Files.isExecutable(path);
        System.out.println("isExecutable: " + isExecutable);
        boolean isHidden = Files.isHidden(path);

        boolean isReadable = Files.isReadable(path);
        boolean isRegularFile = Files.isRegularFile(path);
        boolean isWritable = Files.isWritable(path);
        long size = Files.size(path);

        Files.copy(Paths.get("source.txt"),Paths.get("dest.txt"));
        List<String> lines = Files.readAllLines(Paths.get("source.txt"));
        for(String line: lines){
            System.out.println(line);
        }
        //Files.delete(path);
    }
}
