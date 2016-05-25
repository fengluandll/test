package om.packtpub.mongo.chapter2;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class SampleCursorCount {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {

        try {
            MongoClient mongoClient = new MongoClient( HOST,PORT );
            DB db = mongoClient.getDB( "sampledb" );
            DBCollection coll = db.getCollection("javastuff");

            DBCursor dbCursor = coll.find();
            System.out.println(dbCursor.count());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
