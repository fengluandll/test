package om.packtpub.mongo.chapter2;

import com.mongodb.*;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class SampleInsertEmbeddedDoc {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {
        try {
            MongoClient mongoClient = new MongoClient(HOST, PORT);
            DB db = mongoClient.getDB( "sampledb" );

            DBCollection coll = db.getCollection("javastuff");
            DBObject doc = new BasicDBObject("name","frank")
                    .append("age",31)
                    .append("info",new BasicDBObject("email","abd@uoa.com")
                    .append("phone","222-111-444"));

            coll.insert(doc);


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
