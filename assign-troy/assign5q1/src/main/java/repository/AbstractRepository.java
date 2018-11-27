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

    private static final String ID = "_id";

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
                object.setId(document.getLong(ID));
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


    public T findById(Long id){
        final MongoCollection<Document> mongoCollection = getMongoCollection();
        final T object = createObject();
        final Document document = mongoCollection.find(Filters.eq(ID, id)).first();
        if (document != null) {
            object.setId(document.getLong(ID));
            setDocumentToObject(document, object);
            return object;
        } else {
            return null;
        }
    }

    public List<T> findByIds(List<Long> ids){
        final MongoCollection<Document> mongoCollection = getMongoCollection();
        final List<T> objects = new LinkedList<>();
        mongoCollection.find(Filters.in(ID, ids)).forEach(new Consumer<Document>() {
            @Override
            public void accept(Document document) {
                final T object = createObject();
                object.setId(document.getLong(ID));
                setDocumentToObject(document, object);
                objects.add(object);
            }
        });
        return objects;
    }
}
