package common;

import java.io.IOException;
import java.net.Socket;

public class IOUtils {
    public static void closeQuietly(Socket client) {
        try {
            client.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
