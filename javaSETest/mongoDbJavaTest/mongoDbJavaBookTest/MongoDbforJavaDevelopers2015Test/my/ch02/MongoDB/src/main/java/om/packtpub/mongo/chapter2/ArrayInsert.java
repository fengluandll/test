package om.packtpub.mongo.chapter2;

import com.mongodb.*;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class ArrayInsert {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {
        try {
            MongoClient mongoClient = new MongoClient(HOST, PORT);
            DB db = mongoClient.getDB("sampledb");
            DBCollection coll = db.getCollection("javastuff");

            List<DBObject> kids = new ArrayList<>();
            kids.add(new BasicDBObject("name", "mike"));
            kids.add(new BasicDBObject("name", "faye"));
            DBObject doc = new BasicDBObject("name", "john")
                    .append("age", 35)
                    .append("kids", kids)
                    .append("info",
                            new BasicDBObject("email", "john@mail.com")
                                    .append("phone", "876-134-667"));
            coll.insert(doc);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
