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

    @FXML
    public void showPassengersWindow(ActionEvent actionEvent) {
        UiUtil.showModalWindow("Passenger Management", this.getClass(), "passengerListPane.fxml");
    }

    public void showCruisesWindow(ActionEvent actionEvent) {
        UiUtil.showModalWindow("Cruise Management", this.getClass(), "cruiseListPane.fxml");
    }
}
