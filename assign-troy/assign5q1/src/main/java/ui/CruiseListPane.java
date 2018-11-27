package ui;

import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.cell.PropertyValueFactory;
import model.Cruise;
import repository.AbstractRepository;
import repository.CruiseRepository;

import java.time.LocalDate;

public class CruiseListPane extends AbstractListPane<Cruise> {

    @FXML
    private TableColumn id;

    @FXML
    private TableColumn name;

    @FXML
    private TableColumn departurePort;

    @FXML
    private TableColumn ship;

    @FXML
    private TableColumn sailingDate;

    @FXML
    private TableColumn returnDate;

    @Override
    protected void setCellValueFactories() {
        id.setCellValueFactory(new PropertyValueFactory<Cruise, Long>("id"));
        name.setCellValueFactory(new PropertyValueFactory<Cruise, String>("name"));
        departurePort.setCellValueFactory(new PropertyValueFactory<Cruise, String>("departurePortName"));
        ship.setCellValueFactory(new PropertyValueFactory<Cruise, String>("shipName"));
        sailingDate.setCellValueFactory(new PropertyValueFactory<Cruise, LocalDate>("sailingDate"));
        returnDate.setCellValueFactory(new PropertyValueFactory<Cruise, LocalDate>("returnDate"));
    }

    @Override
    protected AbstractRepository<Cruise> getRepositoryInstance() {
        return CruiseRepository.getInstance();
    }

    @Override
    protected String getAddModifyPaneFxmlFileName() {
        return "cruiseAddModifyPane.fxml";
    }

    @Override
    protected String getEntityName() {
        return "Cruise";
    }
}
