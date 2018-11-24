package ui;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TableView;
import model.Idable;
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

}
