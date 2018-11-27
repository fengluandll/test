package ui;

import common.UiUtil;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;

/**
 * The Controller class for mainPane.fxml
 */
public class MainPane {


    /**
     * show the ports windows
     * @param event
     */
    @FXML
    private void showPortsWindow(ActionEvent event)
    {
        UiUtil.showModalWindow("Port Management", this.getClass(), "portListPane.fxml");
    }

    @FXML
    public void showShipsWindow(ActionEvent actionEvent) {
        UiUtil.showModalWindow("Ship Management", this.getClass(), "shipListPane.fxml");
    }

    @FXML
    public void showSailorsWindow(ActionEvent actionEvent) {
        UiUtil.showModalWindow("Sailor Management", this.getClass(), "sailorListPane.fxml");
    }
}
