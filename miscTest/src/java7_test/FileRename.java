package java7_test;

import java.io.File;

/**
 * Created by YunZhang on 13/12/16.
 */
public class FileRename {
    public static void main(String[] args) {
        File file = new File("test.txt");
        File backup = new File("test.txt.bak");
        backup.delete();
        file.renameTo(backup);

    }
}
