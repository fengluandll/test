package repository;

import common.DateUtil;
import model.Passenger;
import org.bson.Document;

public class PassengerRepository extends AbstractRepository<Passenger> {

    private static final String NAME = "name";

    private final static PassengerRepository REPOSITORY = new PassengerRepository();

    private static final String NATIONALITY = "nationality";
    private static final String DATE_OF_BIRTH = "dateOfBirth";
    private static final String HOME_ADDRESS = "homeAddress";
    private static final String MONEY_SPENT_ON_CRUISE = "moneySpentOnCruise";

    public static PassengerRepository getInstance() {
        return REPOSITORY;
    }

    @Override
    protected String getCollectionName() {
        return "passenger";
    }

    @Override
    protected Passenger createObject() {
        return new Passenger();
    }

    @Override
    protected void setDocumentToObject(Document document, Passenger passenger) {
        passenger.setName(document.getString(NAME));
        passenger.setNationality(document.getString(NATIONALITY));
        passenger.setDateOfBirth(DateUtil.dateToLocalDate(document.getDate(DATE_OF_BIRTH)));
        passenger.setHomeAddress(document.getString(HOME_ADDRESS));
        passenger.setMoneySpentOnCruise(document.getDouble(MONEY_SPENT_ON_CRUISE));
    }

    @Override
    protected void setObjectToDocument(Passenger passenger, Document document) {
        document.append(NAME, passenger.getName())
                .append(NATIONALITY, passenger.getNationality())
                .append(DATE_OF_BIRTH, passenger.getDateOfBirth())
                .append(HOME_ADDRESS, passenger.getHomeAddress())
                .append(MONEY_SPENT_ON_CRUISE, passenger.getMoneySpentOnCruise());
    }
}
