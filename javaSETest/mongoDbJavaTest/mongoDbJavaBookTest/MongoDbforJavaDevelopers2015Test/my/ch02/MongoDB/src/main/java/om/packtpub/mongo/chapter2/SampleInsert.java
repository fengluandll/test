package om.packtpub.mongo.chapter2;

import com.mongodb.*;

import java.net.UnknownHostException;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class SampleInsert {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {
        try {
            MongoClient mongoClient = new MongoClient(HOST, PORT);
            DB db = mongoClient.getDB( "sampledb" );

            DBCollection coll = db.getCollection("javastuff");
            DBObject doc = new BasicDBObject("name","owen")
                    .append("age",47)
                    .append("email","abc@uoa.com");
            coll.insert(doc);


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
