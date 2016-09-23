package lambdasinaction.chap1;

import java.io.File;
import java.io.FileFilter;

/**
 * Created by Allbts-IT on 23/09/2016.
 */
public class ListHiddenFilesJava8 {
    public static void main(String[] args) {
        File[] hiddenFiles = new File(".").listFiles(File::isHidden);

        System.out.println("Hiden files:");
        for (File file : hiddenFiles) {
            System.out.println(file.getAbsolutePath());
        }
    }
}
