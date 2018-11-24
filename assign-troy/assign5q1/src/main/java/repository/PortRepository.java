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
        final MongoCollection<Port> mongoCollection = getMongoCollection();
        final List<Port> ports = new LinkedList<>();
        mongoCollection.find().forEach(new Consumer<Port>() {
            @Override
            public void accept(Port port) {
                ports.add(port);
            }
        });
        return ports;
    }

    private MongoCollection<Port> getMongoCollection() {
        final MongoDatabase mongoDatabase = DbUtil.getMongoDatabase();
        return mongoDatabase.getCollection("port", Port.class);
    }

    public void insertOne(Port port) {
        if (port.getId() == 0) {
            port.setId(nextId());
        }
        getMongoCollection().insertOne(port);
    }

    public long count() {
        return getMongoCollection().countDocuments();
    }

    public long nextId() {
        return count() + 1;
    }




}
