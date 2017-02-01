import java.io.*;

/**
 * Created by YunZhang on 1/2/17.
 */
public class TryResource {
    public static void main(String[] args) {
        try(InputStream input = new FileInputStream("in1.txt");
            OutputStream output = new FileOutputStream("out1.txt")){
            byte[] buf = new byte[1024];
            int len;
            while ((len = input.read(buf)) >= 0)
                output.write(buf,0,len);
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
