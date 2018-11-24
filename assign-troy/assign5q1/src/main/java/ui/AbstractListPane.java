package ui;

import common.UiUtil;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TableView;
import javafx.stage.Stage;
import model.Idable;
import model.common.WindowResult;
import repository.AbstractRepository;

import java.net.URL;
import java.util.List;
import java.util.ResourceBundle;

public abstract class AbstractListPane<T extends Idable> implements Initializable {

    private ObservableList<T> data;

    @FXML
    private TableView tableView;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
        loadData();
    }

    protected void loadData() {
        final List<T> objects = getRepositoryInstance()
                .findAll();

        data = FXCollections.observableArrayList(objects);
        tableView.setItems(data);

        setCellValueFactories();
    }

    protected abstract void setCellValueFactories();

    protected abstract AbstractRepository<T> getRepositoryInstance();

    protected abstract String getAddModifyPaneFxmlFileName();

    @FXML
    public void onAdd(ActionEvent actionEvent) {
        onAddOrModify(getAddModifyPaneFxmlFileName(),getEntityName() + " Creation", null);
    }

    protected abstract String getEntityName();

    protected void onAddOrModify(String fxmlFileName, String stageTitle, T object) {
        WindowResult<AbstractAddModifyPane<T>> windowResult = UiUtil.showModalWindow(stageTitle, this.getClass(), fxmlFileName);
        Stage stage = windowResult.getStage();
        windowResult.getController().loadObject(object);
        stage.setOnHidden(event -> loadData());
    }

    @FXML
    public void onRemove(ActionEvent actionEvent) {
        if (tableView.getSelectionModel().getSelectedItem() != null) {
            Object selectedObject = tableView.getSelectionModel().getSelectedItem();
            T entity = (T) selectedObject;
            getRepositoryInstance().removeOne(entity);
            loadData();
        } else {
            System.err.println("Please select an entity");
        }
    }

    @FXML
    public void onModify(ActionEvent actionEvent) {
        if (tableView.getSelectionModel().getSelectedItem() != null) {
            Object selectedObject = tableView.getSelectionModel().getSelectedItem();
            T entity = (T)selectedObject;
            onAddOrModify(getAddModifyPaneFxmlFileName(), getEntityName() + " Change", entity);
        }
    }

}
