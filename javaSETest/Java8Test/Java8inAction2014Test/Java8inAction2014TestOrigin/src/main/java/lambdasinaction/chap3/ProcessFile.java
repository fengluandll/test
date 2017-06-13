package lambdasinaction.chap3;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

/**
 * Created by YunZhang on 13/6/17.
 */
public class ProcessFile {
    public static String processFile() throws IOException{
        try(BufferedReader br =
            new BufferedReader(new FileReader("data.txt"))){
            return br.readLine();
        }
    }

    public static void main(String[] args) {
        try {
            System.out.println(processFile());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
