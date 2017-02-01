import java.io.*;

/**
 * Created by YunZhang on 1/2/17.
 */
public class TryFinal {
    public static void main(String[] args) {
        try{
            InputStream input = new FileInputStream("in.txt");
            try{
                OutputStream output = new FileOutputStream("out.txt");
                try{
                    byte[] buf = new byte[1024];
                    int len;
                    while ((len = input.read(buf)) >= 0)
                        output.write(buf,0,len);
                }finally {
                    output.close();
                }
            }finally{
                input.close();
            }
        }catch (IOException e){
            e.printStackTrace();
        }

    }
}
