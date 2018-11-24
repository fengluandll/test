package repository;

import model.Ship;
import org.bson.Document;

public class ShipRepository extends AbstractRepository<Ship> {
    @Override
    protected String getCollectionName() {
        return "ship";
    }

    @Override
    protected Ship createObject() {
        return new Ship();
    }

    @Override
    protected void setDocumentToObject(Document document, Ship ship) {
        ship.setName(document.getString("name"));

    }

    @Override
    protected void setObjectToDocument(Ship ship, Document document) {

    }
}
