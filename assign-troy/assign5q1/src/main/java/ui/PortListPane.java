package ui;

import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.cell.PropertyValueFactory;
import model.Port;
import repository.AbstractRepository;
import repository.PortRepository;

public class PortListPane extends AbstractListPane<Port> {

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
    protected void setCellValueFactories() {
        tcId.setCellValueFactory(new PropertyValueFactory<Port, Long>("id"));
        tcCountry.setCellValueFactory(new PropertyValueFactory<Port, String>("country"));
        tcName.setCellValueFactory(new PropertyValueFactory<Port, String>("name"));
        tcPassportRequired.setCellValueFactory(new PropertyValueFactory<Port, Boolean>("passportRequired"));
        tcPopulation.setCellValueFactory(new PropertyValueFactory<Port, Integer>("population"));
        tcDockingFee.setCellValueFactory(new PropertyValueFactory<Port, Double>("dockingFee"));
    }

    @Override
    protected AbstractRepository<Port> getRepositoryInstance() {
        return PortRepository
                .getInstance();
    }

    @Override
    protected String getAddModifyPaneFxmlFileName() {
        return "portAddModifyPane.fxml";
    }

    @Override
    protected String getEntityName() {
        return "Port";
    }

}
