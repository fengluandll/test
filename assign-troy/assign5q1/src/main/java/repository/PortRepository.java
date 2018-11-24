package repository;

import model.Port;
import org.bson.Document;

public class PortRepository extends AbstractRepository<Port> {

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

    @Override
    protected String getCollectionName() {
        return "port";
    }

    @Override
    protected Port createObject() {
        return new Port();
    }

    @Override
    protected void setDocumentToObject(Document document, Port port) {
        port.setId(document.getLong(ID));
        port.setCountry(document.getString(COUNTRY));
        port.setName(document.getString(NAME));
        port.setPassportRequired(document.getBoolean(PASSPORT_REQUIRED));
        port.setPopulation(document.getInteger(POPULATION));
        port.setDockingFee(document.getDouble(DOCKING_FEE));
    }

    @Override
    protected void setObjectToDocument(Port port, Document document) {
        document.append(COUNTRY, port.getCountry())
                .append(NAME, port.getName())
                .append(PASSPORT_REQUIRED, port.isPassportRequired())
                .append(POPULATION, port.getPopulation())
                .append(DOCKING_FEE, port.getDockingFee());
    }

}
