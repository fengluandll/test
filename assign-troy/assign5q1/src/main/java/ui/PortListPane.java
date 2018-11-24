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
import javafx.stage.Stage;
import model.Port;
import model.common.WindowResult;
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

    private ObservableList<Port> data;


    @Override
    public void initialize(URL location, ResourceBundle resources) {
        loadData();
    }

    private void loadData() {
        final List<Port> ports=  PortRepository
                .getInstance()
                .findAll();

        data = FXCollections.observableArrayList(ports);
        tablePort.setItems(data);

        tcId.setCellValueFactory(new PropertyValueFactory<Port, Long>("id"));
        tcCountry.setCellValueFactory(new PropertyValueFactory<Port, String>("country"));
        tcName.setCellValueFactory(new PropertyValueFactory<Port, String>("name"));
        tcPassportRequired.setCellValueFactory(new PropertyValueFactory<Port, Boolean>("passportRequired"));
        tcPopulation.setCellValueFactory(new PropertyValueFactory<Port, Integer>("population"));
        tcDockingFee.setCellValueFactory(new PropertyValueFactory<Port, Double>("dockingFee"));
    }

    public void onAddPort(ActionEvent actionEvent) {
        onAddOrModify("Port Creation", null);
    }

    private void onAddOrModify(String stageTitle, Port port) {
        WindowResult<PortAddModifyPane> windowResult = UiUtil.showModalWindow(stageTitle, this.getClass(), "portAddModifyPane.fxml");
        Stage stage = windowResult.getStage();
        windowResult.getController().loadObject(port);
        stage.setOnHidden(event -> loadData());
    }

    public void onRemovePort(ActionEvent actionEvent) {
        if (tablePort.getSelectionModel().getSelectedItem() != null) {
            Object selectedObject = tablePort.getSelectionModel().getSelectedItem();
            if (selectedObject instanceof Port) {
                Port port = (Port)selectedObject;
                PortRepository.getInstance().removeOne(port);
                loadData();
            }
        }
    }

    public void onModify(ActionEvent actionEvent) {
        if (tablePort.getSelectionModel().getSelectedItem() != null) {
            Object selectedObject = tablePort.getSelectionModel().getSelectedItem();
            if (selectedObject instanceof Port) {
                Port port = (Port)selectedObject;
                onAddOrModify("Port Change", port);
            }
        }
    }
}
