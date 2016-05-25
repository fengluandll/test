package om.packtpub.mongo.chapter2;

import com.mongodb.*;

import java.net.UnknownHostException;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class SampleFirst {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {

        try {
            MongoClient mongoClient = new MongoClient( HOST,PORT );
            DB db = mongoClient.getDB( "sampledb" );
            DBCollection coll = db.getCollection("javastuff");

            DBObject myDoc = coll.findOne();
            System.out.println(myDoc);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
