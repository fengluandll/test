package model.common;

import javafx.stage.Stage;

public class WindowResult<T> {
    private Stage stage;
    private T controller;

    public WindowResult(Stage stage, T controller) {
        this.stage = stage;
        this.controller = controller;
    }

    public Stage getStage() {
        return stage;
    }

    public T getController() {
        return controller;
    }
}
