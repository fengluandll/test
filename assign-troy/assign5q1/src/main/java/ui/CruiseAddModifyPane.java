package ui;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.ComboBox;
import javafx.scene.control.DatePicker;
import model.Cruise;
import model.Port;
import model.Ship;
import repository.AbstractRepository;
import repository.CruiseRepository;
import repository.PortRepository;
import repository.ShipRepository;

import java.net.URL;
import java.util.ResourceBundle;

public class CruiseAddModifyPane extends AbstractAddModifyPane<Cruise> implements Initializable {

    @FXML
    private DatePicker sailingDate;

    @FXML
    private DatePicker returnDate;

    @FXML
    private ComboBox<Ship> ship;

    @FXML
    private ComboBox<Port> departurePort;


    @Override
    public void initialize(URL location, ResourceBundle resources) {

        // for both add and modify
        ObservableList<Ship> ships = FXCollections.observableList(ShipRepository.getInstance().findAll());
        ship.setItems(ships);

        ObservableList<Port> ports = FXCollections.observableList(PortRepository.getInstance().findAll());
        departurePort.setItems(ports);
    }

    @Override
    protected AbstractRepository<Cruise> getRepositoryInstance() {
        return CruiseRepository.getInstance();
    }

    @Override
    protected void objectToControls(Cruise intactCruise) {
        sailingDate.setValue(intactCruise.getSailingDate());
        returnDate.setValue(intactCruise.getReturnDate());
        ship.setValue(intactCruise.getShip());
        departurePort.setValue(intactCruise.getDeparturePort());
    }

    @Override
    protected Cruise controlsToObject() {
        Cruise cruise = new Cruise();
        cruise.setSailingDate(sailingDate.getValue());
        cruise.setReturnDate(returnDate.getValue());
        cruise.setShip(ship.getValue());
        cruise.setDeparturePort(departurePort.getValue());
        return cruise;
    }

}
