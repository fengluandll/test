package repository;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import common.DbUtil;
import model.Port;
import org.bson.Document;

import java.util.LinkedList;
import java.util.List;
import java.util.function.Consumer;

public class PortRepository {

    private static final PortRepository PORT_REPOSITORY = new PortRepository();
    private static final String ID = "_id";
    private static final String COUNTRY = "country";
    private static final String NAME = "name";
    private static final String PASSPORT_REQUIRED = "passportRequired";
    private static final String POPULATION = "population";
    private static final String DOCKING_FEE = "dockingFee";

    public static PortRepository getInstance() {
        return PORT_REPOSITORY;
    }

    private PortRepository() {
    }

    public List<Port> findAll() {
        final MongoCollection<Document> mongoCollection = getMongoCollection();
        final List<Port> ports = new LinkedList<>();
        mongoCollection.find().forEach(new Consumer<Document>() {
            @Override
            public void accept(Document document) {
                ports.add(documentToObject(document));
            }
        });
        return ports;
    }

    private Port documentToObject(Document document) {
        Port port = new Port();
        port.setId(document.getLong(ID));
        port.setCountry(document.getString(COUNTRY));
        port.setName(document.getString(NAME));
        port.setPassportRequired(document.getBoolean(PASSPORT_REQUIRED));
        port.setPopulation(document.getInteger(POPULATION));
        port.setDockingFee(document.getDouble(DOCKING_FEE));
        return port;
    }

    private MongoCollection<Document> getMongoCollection() {
        final MongoDatabase mongoDatabase = DbUtil.getMongoDatabase();
        return mongoDatabase.getCollection("port");
    }

    public void insertOne(Port port) {
        if (port.getId() == 0) {
            port.setId(nextId());
        }
        getMongoCollection().insertOne(objectToDocument(port));
    }

    private Document objectToDocument(Port port) {
        return new Document()
                .append(ID, port.getId())
                .append(COUNTRY, port.getCountry())
                .append(NAME, port.getName())
                .append(PASSPORT_REQUIRED, port.isPassportRequired())
                .append(POPULATION, port.getPopulation())
                .append(DOCKING_FEE, port.getDockingFee());
    }

    public long count() {
        return getMongoCollection().countDocuments();
    }

    public long nextId() {
        return count() + 1;
    }

    public void removeOne(Port port) {
        getMongoCollection().deleteOne(Filters.eq("_id", port.getId()));
    }

    public void updateOne(long id, Port port) {
        getMongoCollection().replaceOne(Filters.eq("_id", id), objectToDocument(port));
    }
}
