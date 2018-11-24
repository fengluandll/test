package repository;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import common.DbUtil;
import model.Port;

import java.util.LinkedList;
import java.util.List;
import java.util.function.Consumer;

public class PortRepository {

    private static final PortRepository PORT_REPOSITORY = new PortRepository();

    public static PortRepository getInstance() {
        return PORT_REPOSITORY;
    }

    private PortRepository() {
    }

    public List<Port> findAll() {
        final MongoDatabase mongoDatabase = DbUtil.getMongoDatabase();
        final MongoCollection<Port> mongoCollection = mongoDatabase.getCollection("port", Port.class);
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
