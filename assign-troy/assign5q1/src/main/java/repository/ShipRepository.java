package repository;

import model.Ship;
import org.bson.Document;

import java.util.HashSet;
import java.util.List;

public class ShipRepository extends AbstractRepository<Ship> {

    private static final String NAME = "name";
    private static final String BUILT_YEAR = "builtYear";
    private static final String WEIGHT = "weight";
    private static final String PASSENGER_CAPACITY = "passengerCapacity";
    private static final String SAILOR_IDS = "sailorIds";

    private final static ShipRepository REPOSITORY = new ShipRepository();

    public static ShipRepository getInstance(){
        return REPOSITORY;
    }

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
        ship.setName(document.getString(NAME));
        ship.setBuiltYear(document.getInteger(BUILT_YEAR));
        ship.setWeight(document.getDouble(WEIGHT));
        ship.setPassengerCapacity(document.getInteger(PASSENGER_CAPACITY));
        ship.setSailorIds(new HashSet((List<Long>)document.get(SAILOR_IDS)));
    }

    @Override
    protected void setObjectToDocument(Ship ship, Document document) {
        document.append(NAME, ship.getName())
                .append(BUILT_YEAR, ship.getBuiltYear())
                .append(WEIGHT, ship.getWeight())
                .append(PASSENGER_CAPACITY,ship.getPassengerCapacity())
                .append(SAILOR_IDS, ship.getSailorIds());
    }
}
