package repository;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import common.DbUtil;
import model.Idable;
import org.bson.Document;

import java.util.LinkedList;
import java.util.List;
import java.util.function.Consumer;

public abstract class AbstractRepository<T extends Idable> {

    protected AbstractRepository() {
    }

    protected abstract String getCollectionName();

    protected abstract T createObject();

    protected abstract void setDocumentToObject(Document document, T object);

    protected abstract void setObjectToDocument(T object, Document document);


    public List<T> findAll() {
        final MongoCollection<Document> mongoCollection = getMongoCollection();
        final List<T> objects = new LinkedList<>();
        mongoCollection.find().forEach(new Consumer<Document>() {
            @Override
            public void accept(Document document) {
                final T object = createObject();
                setDocumentToObject(document, object);
                objects.add(object);
            }
        });
        return objects;
    }

    public long count() {
        return getMongoCollection().countDocuments();
    }

    public long nextId() {
        return count() + 1;
    }

    public void removeOne(Idable idable) {
        getMongoCollection().deleteOne(Filters.eq("_id", idable.getId()));
    }

    public void insertOne(T object) {
        if (object.getId() == null || object.getId() == 0) {
            object.setId(nextId());
        }
        getMongoCollection().insertOne(objectToDocument(object));
    }

    public void updateOne(Long id, T object) {
        getMongoCollection().replaceOne(Filters.eq("_id", id), objectToDocument(object));
    }

    private MongoCollection<Document> getMongoCollection() {
        final MongoDatabase mongoDatabase = DbUtil.getMongoDatabase();
        return mongoDatabase.getCollection(getCollectionName());
    }

    private Document objectToDocument(T object) {
        final Document document = new Document();
        // set _id property
        document.append("_id", object.getId());
        setObjectToDocument(object, document);
        return document;
    }



}
