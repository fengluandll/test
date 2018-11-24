package common;

import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

public class DbUtil {

    private static CodecRegistry pojoCodecRegistry = fromRegistries(fromProviders(PojoCodecProvider.builder().automatic(true).build()));

    MongoClientSettings settings = MongoClientSettings.builder()
            .codecRegistry(pojoCodecRegistry)
            .build();

    // connect to local Mongo database server
    private static MongoClient mongoClient = MongoClients.create();

    // the database name is cruises
    private static MongoDatabase mongoDatabase = mongoClient.getDatabase("cruises");

    public static MongoDatabase getMongoDatabase() {
        return mongoDatabase;
    }

}
