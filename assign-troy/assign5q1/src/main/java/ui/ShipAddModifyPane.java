package ui;

import common.ValidatorUtil;
import common.ValueUtil;
import javafx.fxml.FXML;
import javafx.scene.control.TextField;
import model.Ship;
import repository.AbstractRepository;
import repository.ShipRepository;

public class ShipAddModifyPane extends AbstractAddModifyPane<Ship> {

    @FXML
    private TextField name;

    @FXML
    private TextField weight;

    @FXML
    private TextField builtYear;

    @FXML
    private TextField passengerCapacity;

    @Override
    protected AbstractRepository<Ship> getRepositoryInstance() {
        return ShipRepository.getInstance();
    }

    @Override
    protected void objectToControls(Ship intactShip) {
        name.setText(intactShip.getName());
        weight.setText(ValueUtil.getDoubleAsString(intactShip.getWeight()));
        builtYear.setText(ValueUtil.getIntegerAsString(intactShip.getBuiltYear()));
        passengerCapacity.setText(ValueUtil.getIntegerAsString(intactShip.getPassengerCapacity()));
    }

    @Override
    protected Ship controlsToObject() {
        Ship ship = new Ship();
        ValidatorUtil.ensureNotEmpty(name.getText(), "Name");
        ship.setName(name.getText());

        if (ValueUtil.isNotNullAndNotEmpty(weight.getText())) {
            ValidatorUtil.ensureDouble(weight.getText(), "Weight");
            ValidatorUtil.ensurePositiveDouble(Double.parseDouble(weight.getText()), "Weight");
            ship.setWeight(Double.parseDouble(weight.getText()));
        }

        ship.setBuiltYear(ValueUtil.getStringAsPositiveInteger(builtYear.getText(), "Built Year"));
        ship.setPassengerCapacity(ValueUtil.getStringAsPositiveInteger(passengerCapacity.getText(), "Passenger Capacity"));

        return ship;
    }

}
