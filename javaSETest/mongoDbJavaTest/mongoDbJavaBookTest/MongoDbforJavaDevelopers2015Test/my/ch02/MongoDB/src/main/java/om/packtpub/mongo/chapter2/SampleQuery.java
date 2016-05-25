package om.packtpub.mongo.chapter2;

import com.mongodb.*;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class SampleQuery {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {

        try {
            MongoClient mongoClient = new MongoClient( HOST,PORT );
            DB db = mongoClient.getDB( "sampledb" );
            DBCollection coll = db.getCollection("javastuff");

            DBCursor cursor = coll.find();

            try {
                while (cursor.hasNext()){
                    DBObject object = cursor.next();
                    System.out.println(object);
                }
            } finally {
                cursor.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
