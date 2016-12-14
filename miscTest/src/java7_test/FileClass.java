package java7_test;

import java.io.*;

/**
 * Created by YunZhang on 13/12/16.
 */
public class FileClass {
    public static void main(String[] args) throws IOException {
        String f = "file1.java";
        File f1 = new File(f);
        FileOutputStream out = new FileOutputStream(f1);
        InputStream in = new FileInputStream(f1);
        Reader reader = new FileReader(f1);

    }
}
