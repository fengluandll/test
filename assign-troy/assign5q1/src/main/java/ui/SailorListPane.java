package ui;

import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.cell.PropertyValueFactory;
import model.Sailor;
import repository.AbstractRepository;
import repository.SailorRepository;

import java.time.LocalDate;

public class SailorListPane extends AbstractListPane<Sailor> {

    @FXML
    private TableColumn id;

    @FXML
    private TableColumn name;

    @FXML
    private TableColumn dateOfBirth;

    @FXML
    private TableColumn nationality;

    @FXML
    private TableColumn supervisorName;

    @Override
    protected void setCellValueFactories() {
        id.setCellValueFactory(new PropertyValueFactory<Sailor, Long>("ID"));
        name.setCellValueFactory(new PropertyValueFactory<Sailor, String>("Name"));
        dateOfBirth.setCellValueFactory(new PropertyValueFactory<Sailor, LocalDate>("dateOfBirth"));
        nationality.setCellValueFactory(new PropertyValueFactory<Sailor, String>("nationality"));
        supervisorName.setCellValueFactory(new PropertyValueFactory<Sailor, String>("supervisorName"));
    }

    @Override
    protected AbstractRepository<Sailor> getRepositoryInstance() {
        return SailorRepository.getInstance();
    }

    @Override
    protected String getAddModifyPaneFxmlFileName() {
        return "sailorAddModifyPane.fxml";
    }

    @Override
    protected String getEntityName() {
        return "Sailor";
    }
}
