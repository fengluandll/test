package ui;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

import static javafx.stage.Modality.APPLICATION_MODAL;

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
//        Port departingPort = new Port();
//        departingPort.setId(PortRepository.getInstance().nextId());
//        departingPort.setCountry("UK");
//        departingPort.setName("North Port");
//        departingPort.setPasswordRequired(true);
//        departingPort.setPopulation(55000);
//        departingPort.setDockingFee(5000);
//
//        PortRepository.getInstance().insertOne(departingPort);

        // open the portList stage
        Parent root = null;
        try {
            root = FXMLLoader.load(getClass().getResource("portListStage.fxml"));
            Stage stage = new Stage();
            stage.initModality(APPLICATION_MODAL);
            stage.setTitle("Port Management");
            stage.setScene(new Scene(root, 800, 600));
            // set menu item event handlers
            stage.show();
        } catch (IOException e) {
            System.err.println("Failed to load ui/portList.fxml");
        }
    }
}
