package ui;

import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.cell.PropertyValueFactory;
import model.Ship;
import repository.AbstractRepository;
import repository.ShipRepository;

public class ShipListPane extends AbstractListPane<Ship>{

    @FXML
    private TableColumn id;

    @FXML
    private TableColumn name;

    @FXML
    private TableColumn builtYear;

    @FXML
    private TableColumn passengerCapacity;

    @FXML
    private TableColumn weight;

    @Override
    protected void setCellValueFactories() {
        id.setCellValueFactory(new PropertyValueFactory<Ship, Long>("ID"));
        name.setCellValueFactory(new PropertyValueFactory<Ship, String>("Name"));
        builtYear.setCellValueFactory(new PropertyValueFactory<Ship, Integer>("Built Year"));
        passengerCapacity.setCellValueFactory(new PropertyValueFactory<Ship, Integer>("Passenger Capacity"));
        weight.setCellValueFactory(new PropertyValueFactory<Ship, Double>("Weight"));
    }

    @Override
    protected AbstractRepository<Ship> getRepositoryInstance() {
        return ShipRepository.getInstance();
    }

    @Override
    protected String getAddModifyPaneFxmlFileName() {
        return "shipAddModifyPane.fxml";
    }

    @Override
    protected String getEntityName() {
        return "Ship";
    }
}
