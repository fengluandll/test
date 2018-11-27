package ui;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.stage.Stage;
import model.Idable;
import model.common.ValidationException;
import repository.AbstractRepository;

public abstract class AbstractAddModifyPane<T extends Idable> {

    private T intactObject;

    protected abstract AbstractRepository<T> getRepositoryInstance();

    protected abstract T controlsToObject();

    protected abstract void objectToControls(T intactObject);

    @FXML
    private Label error;

    public void loadObject(T object) {
        if (object != null) {
            intactObject = object;
            objectToControls(object);
        }
    }

    @FXML
    public void onSave(ActionEvent actionEvent) {
        try {
            T object = controlsToObject();

            if (intactObject == null) {
                // save data
                getRepositoryInstance()
                        .insertOne(object);
            } else {
                object.setId(intactObject.getId());
                getRepositoryInstance()
                        .updateOne(intactObject.getId(), object);
            }

            // close the current stage
            Stage stage = (Stage) error.getScene().getWindow();
            stage.close();

        } catch (ValidationException e) {
            error.setText(e.getMessage());
        }
    }


}
