package ui;

import common.ValidatorUtil;
import javafx.fxml.FXML;
import javafx.scene.control.ComboBox;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;
import model.Sailor;
import repository.AbstractRepository;
import repository.SailorRepository;

public class SailorAddModifyPane extends AbstractAddModifyPane<Sailor> {

    @FXML
    private TextField name;

    @FXML
    private DatePicker dateOfBirth;

    @FXML
    private TextField nationality;

    @FXML
    private ComboBox supervisor;


    @Override
    protected AbstractRepository<Sailor> getRepositoryInstance() {
        return SailorRepository.getInstance();
    }

    @Override
    protected void objectToControls(Sailor intactSailor) {
        name.setText(intactSailor.getName());
        dateOfBirth.setValue(intactSailor.getDateOfBirth());
        nationality.setText(intactSailor.getNationality());
        // add supervisor
    }

    @Override
    protected Sailor controlsToObject() {
        Sailor sailor = new Sailor();
        ValidatorUtil.ensureNotEmpty(name.getText(), "Name");
        sailor.setName(name.getText());

        sailor.setDateOfBirth(dateOfBirth.getValue());
        ValidatorUtil.ensureNotEmpty(nationality.getText(), "nationality");
        sailor.setNationality(nationality.getText());
        return sailor;
    }

}
