package om.packtpub.mongo.chapter2;

import com.mongodb.*;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class QueryComplex {
    private final static String HOST = "localhost";
    private final static int PORT = 27017;

    public static void main(String[] args) {

        try {
            MongoClient mongoClient = new MongoClient( HOST,PORT );
            DB db = mongoClient.getDB( "sampledb" );
            DBCollection coll = db.getCollection("javastuff");

            DBObject query = new
                    BasicDBObject("name", new BasicDBObject("$ne",
                    "frank")).append("age", new BasicDBObject("$gt", 10));
            DBCursor cursor = coll.find(query);

            while(cursor.hasNext()){
                DBObject dbObject = cursor.next();
                System.out.println(dbObject);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
