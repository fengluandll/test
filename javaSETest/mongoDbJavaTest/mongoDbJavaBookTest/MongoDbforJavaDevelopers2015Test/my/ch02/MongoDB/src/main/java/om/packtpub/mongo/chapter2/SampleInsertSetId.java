package om.packtpub.mongo.chapter2;

import com.mongodb.*;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class SampleInsertSetId {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {
        try {
            MongoClient mongoClient = new MongoClient(HOST, PORT);
            DB db = mongoClient.getDB( "sampledb" );

            DBCollection coll = db.getCollection("javastuff");
            DBObject doc = new BasicDBObject("_id", "12345678")
                    .append("name","jim")
                    .append("age", 47)
                    .append("info", new BasicDBObject("email", "owen@mail.com").
                            append("phone", "111-222-333"));

            coll.insert(doc);


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
