package om.packtpub.mongo.chapter2;

import com.mongodb.DB;
import com.mongodb.MongoClient;

import java.net.UnknownHostException;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class HelloMongo {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {
        MongoClient mongoClient = null;
        try {
            mongoClient = new MongoClient(HOST,
                    PORT);
            DB db = mongoClient.getDB( "test" );
            System.out.println("Successfully connected to MongoDB");
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
