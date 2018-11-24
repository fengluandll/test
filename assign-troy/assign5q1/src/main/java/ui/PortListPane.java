package ui;

import common.UiUtil;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import model.Port;
import repository.PortRepository;

import java.net.URL;
import java.util.List;
import java.util.ResourceBundle;

public class PortListPane implements Initializable {

    @FXML
    private TableView tablePort;

    @FXML
    private TableColumn tcId;

    @FXML
    private TableColumn tcCountry;

    @FXML
    private TableColumn tcName;

    @FXML
    private TableColumn tcPassportRequired;

    @FXML
    private TableColumn tcPopulation;

    @FXML
    private TableColumn tcDockingFee;

    @Override
    public void initialize(URL location, ResourceBundle resources) {

        final List<Port> ports=  PortRepository
                .getInstance()
                .findAll();

        final ObservableList<Port> data = FXCollections.observableArrayList(ports);
        tablePort.setItems(data);

        tcId.setCellValueFactory(new PropertyValueFactory<Port, Long>("id"));
        tcCountry.setCellValueFactory(new PropertyValueFactory<Port, String>("country"));
        tcName.setCellValueFactory(new PropertyValueFactory<Port, String>("tcName"));
        tcPassportRequired.setCellValueFactory(new PropertyValueFactory<Port, Boolean>("passportRequired"));
        tcPopulation.setCellValueFactory(new PropertyValueFactory<Port, Integer>("population"));
        tcDockingFee.setCellValueFactory(new PropertyValueFactory<Port, Double>("dockingFee"));

        ports.forEach(System.out::println);
    }


    public void onAddPort(ActionEvent actionEvent) {
        UiUtil.showModalWindow("Port Creation", this.getClass(), "portCreationPane.fxml");
    }
}
