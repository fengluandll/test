package ui;

import common.ValidatorUtil;
import common.ValueUtil;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.CheckBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import model.Port;
import model.common.ValidationException;
import repository.PortRepository;

public class PortAddModifyPane {
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

    private Port intactPort;

    @FXML
    private Label error;


    public void loadObject(Port port) {
        if (port != null) {
            intactPort = port;
            country.setText(intactPort.getCountry());
            name.setText(intactPort.getName());
            passportRequired.setSelected(intactPort.isPassportRequired());
            population.setText(ValueUtil.getIntegerAsString(intactPort.getPopulation()));
            dockingFee.setText(ValueUtil.getDoubleAsString(intactPort.getDockingFee()));
        }
    }

    public void onSave(ActionEvent actionEvent) {
        try {

            Port port = new Port();

            ValidatorUtil.ensureNotEmpty(country.getText(), "Country");
            port.setCountry(country.getText());

            ValidatorUtil.ensureNotEmpty(name.getText(), "Name");
            port.setName(name.getText());

            port.setPassportRequired(passportRequired.isSelected());

            if (population.getText() != null && !population.getText().isEmpty()) {
                ValidatorUtil.ensureInteger(population.getText(), "Population");
                ValidatorUtil.ensurePositiveInteger(Integer.parseInt(population.getText()), "Population");
                port.setPopulation(Integer.parseInt(population.getText()));
            }

            if (dockingFee.getText() != null && !dockingFee.getText().isEmpty()) {
                ValidatorUtil.ensureDouble(dockingFee.getText(), "Docking Fee");
                ValidatorUtil.ensurePositiveDouble(Double.parseDouble(dockingFee.getText()), "Docking Fee");
            }

            if (intactPort == null) {
                // save data
                PortRepository.getInstance()
                        .insertOne(port);
            } else {
                port.setId(intactPort.getId());
                PortRepository.getInstance()
                        .updateOne(intactPort.getId(), port);
            }

            // close the current stage
            Stage stage = (Stage) error.getScene().getWindow();
            stage.close();

        } catch (ValidationException e) {
            error.setText(e.getMessage());
        }
    }

}
