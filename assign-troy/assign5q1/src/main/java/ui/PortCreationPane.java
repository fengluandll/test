package ui;

import common.ValidatorUtil;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.CheckBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import model.Port;
import model.common.ValidationException;
import repository.PortRepository;

public class PortCreationPane {
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

    @FXML
    private Label error;

    public void onSave(ActionEvent actionEvent) {
        try {
            Port port = new Port();

            ValidatorUtil.ensureNotEmpty(country.getText(), "Country");
            port.setCountry(country.getText());

            ValidatorUtil.ensureNotEmpty(name.getText(), "Name");
            port.setName(name.getText());

            port.setPassportRequired(passportRequired.isSelected());

            if (!population.getText().isEmpty()) {
                ValidatorUtil.ensureInteger(population.getText(), "Population");
                ValidatorUtil.ensurePositiveInteger(Integer.parseInt(population.getText()), "Population");
                port.setPopulation(Integer.parseInt(population.getText()));
            }

            if (!dockingFee.getText().isEmpty()) {
                ValidatorUtil.ensureDouble(dockingFee.getText(), "Docking Fee");
                ValidatorUtil.ensurePositiveDouble(Double.parseDouble(dockingFee.getText()), "Docking Fee");
            }

            // save data
            PortRepository.getInstance()
                    .insertOne(port);

        } catch (ValidationException e) {
            error.setText(e.getMessage());
        }
    }
}
