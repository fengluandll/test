package om.packtpub.mongo.chapter2;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class SampleCollectionCount {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {

        try {
            MongoClient mongoClient = new MongoClient( HOST,PORT );
            DB db = mongoClient.getDB( "sampledb" );
            DBCollection coll = db.getCollection("javastuff");

            System.out.println(coll.getCount());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
