package lambdasinaction.chap1;

import java.io.File;
import java.io.FileFilter;

/**
 * Created by Allbts-IT on 23/09/2016.
 */
public class ListHiddenFiles {
    public static void main(String[] args) {
        File[] hiddenFiles = new File(".").listFiles(new FileFilter() {
            @Override
            public boolean accept(File file) {
                System.out.println(file.getAbsolutePath());
                return file.isHidden();
            }
        });

        System.out.println("Hiden files:");
        for (File file : hiddenFiles) {
            System.out.println(file.getAbsolutePath());
        }
    }
}
