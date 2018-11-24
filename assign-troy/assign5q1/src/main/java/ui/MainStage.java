package ui;

import common.UiUtil;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;

/**
 * The Controller class for mainStage.fxml
 */
public class MainStage {


    /**
     * show the ports windows
     * @param event
     */
    @FXML
    private void showPortsWindow(ActionEvent event)
    {
        UiUtil.showModalWindow("Port Management", this.getClass(), "portListStage.fxml");
    }

}
