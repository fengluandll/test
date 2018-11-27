package ui;

import common.ValidatorUtil;
import common.ValueUtil;
import javafx.fxml.FXML;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;
import model.Passenger;
import repository.AbstractRepository;
import repository.PassengerRepository;

public class PassengerAddModifyPane extends AbstractAddModifyPane<Passenger> {

    @FXML
    private TextField name;

    @FXML
    private DatePicker dateOfBirth;

    @FXML
    private TextField nationality;

    @FXML
    private TextField moneySpentOnCruise;

    @FXML
    private TextField homeAddress;



    @Override
    protected AbstractRepository<Passenger> getRepositoryInstance() {
        return PassengerRepository.getInstance();
    }

    @Override
    protected void objectToControls(Passenger intactPassenger) {
        name.setText(intactPassenger.getName());
        dateOfBirth.setValue(intactPassenger.getDateOfBirth());
        nationality.setText(intactPassenger.getNationality());
        moneySpentOnCruise.setText(ValueUtil.getDoubleAsString(intactPassenger.getMoneySpentOnCruise()));
        homeAddress.setText(intactPassenger.getHomeAddress());
    }

    @Override
    protected Passenger controlsToObject() {
        Passenger passenger = new Passenger();
        ValidatorUtil.ensureNotEmpty(name.getText(), "Name");
        passenger.setName(name.getText());

        passenger.setDateOfBirth(dateOfBirth.getValue());

        ValidatorUtil.ensureNotEmpty(nationality.getText(), "nationality");
        passenger.setNationality(nationality.getText());

        ValidatorUtil.ensureNotEmpty(moneySpentOnCruise.getText(), "Money Spent on Cruise");
        passenger.setMoneySpentOnCruise(ValueUtil.getStringAsPositiveDouble(moneySpentOnCruise.getText(), "Money Spent on Cruise"));
        passenger.setHomeAddress(homeAddress.getText());
        return passenger;
    }

}
