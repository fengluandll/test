package ui;

import common.ValidatorUtil;
import common.ValueUtil;
import javafx.fxml.FXML;
import javafx.scene.control.CheckBox;
import javafx.scene.control.TextField;
import model.Port;
import repository.AbstractRepository;
import repository.PortRepository;

public class PortAddModifyPane extends AbstractAddModifyPane<Port> {
    @FXML
    private TextField country;

    @FXML
    private TextField name;

    @FXML
    private CheckBox passportRequired;

    @FXML
    private TextField population;

    @FXML
    private TextField dockingFee;

    @Override
    protected AbstractRepository<Port> getRepositoryInstance() {
        return PortRepository.getInstance();
    }

    @Override
    protected void objectToControls(Port intactPort) {
        country.setText(intactPort.getCountry());
        name.setText(intactPort.getName());
        passportRequired.setSelected(intactPort.isPassportRequired());
        population.setText(ValueUtil.getIntegerAsString(intactPort.getPopulation()));
        dockingFee.setText(ValueUtil.getDoubleAsString(intactPort.getDockingFee()));
    }

    @Override
    protected Port controlsToObject() {
        Port port = new Port();

        ValidatorUtil.ensureNotEmpty(country.getText(), "Country");
        port.setCountry(country.getText());

        ValidatorUtil.ensureNotEmpty(name.getText(), "Name");
        port.setName(name.getText());

        port.setPassportRequired(passportRequired.isSelected());

        port.setPopulation(ValueUtil.getStringAsPositiveInteger(population.getText(), "Popluation"));

        if (dockingFee.getText() != null && !dockingFee.getText().isEmpty()) {
            ValidatorUtil.ensureDouble(dockingFee.getText(), "Docking Fee");
            ValidatorUtil.ensurePositiveDouble(Double.parseDouble(dockingFee.getText()), "Docking Fee");
        }



        return port;
    }

}
