package repository;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import common.DbUtil;
import model.Port;

import java.util.LinkedList;
import java.util.List;
import java.util.function.Consumer;

public class PortRepository {
    public List<Port> findAll() {
        final MongoDatabase mongoDatabase = DbUtil.getMongoDatabase();
        final MongoCollection mongoCollection = mongoDatabase.getCollection("port", Port.class);
        final List<Port> ports = new LinkedList<>();
        mongoCollection.find().forEach(new Consumer<Port>() {
            @Override
            public void accept(Port port) {
                ports.add(port);
            }
        });
        return ports;
    }
}
