package controller;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import model.Port;

import java.net.URL;
import java.util.ResourceBundle;

/**
 * The Controller class for mainStage.fxml
 */
public class MainStageController implements Initializable {

    @Override
    public void initialize(URL location, ResourceBundle resources) {
    }

    /**
     * show the ports windows
     * @param event
     */
    @FXML
    private void showPortsWindow(ActionEvent event)
    {



        Port departingPort = new Port();
        departingPort.setCountry("UK");
        departingPort.setName("North Port");
        departingPort.setPasswordRequired(true);
        departingPort.setPopulation(55000);
        departingPort.setDockingFee(5000);
    }
}
