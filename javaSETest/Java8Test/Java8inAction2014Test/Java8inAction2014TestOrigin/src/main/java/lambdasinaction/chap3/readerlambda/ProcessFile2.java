package lambdasinaction.chap3.readerlambda;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

/**
 * Created by YunZhang on 13/6/17.
 */
public class ProcessFile2 {
    public static String processFile(BufferedReaderProcessor p) throws IOException{
        try(BufferedReader br =
            new BufferedReader(new FileReader("data.txt"))){
            return p.process(br);
        }
    }

    public static void main(String[] args) {
        try {
            String twolines = processFile(br -> br.readLine() + br.readLine());
            System.out.println(twolines);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
