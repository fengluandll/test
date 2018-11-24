package common;

import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

import static javafx.stage.Modality.APPLICATION_MODAL;

public class UiUtil {

    public static Stage showModalWindow(String stageTitle, Class<?> aClass, String fxmlFileName) {
        // open the portList stage
        Parent root;
        try {
            root = FXMLLoader.load(aClass.getResource(fxmlFileName));
            Stage stage = new Stage();
            stage.initModality(APPLICATION_MODAL);
            stage.setTitle(stageTitle);
            stage.setScene(new Scene(root, 800, 600));
            // set menu item event handlers
            stage.show();
            return stage;
        } catch (IOException e) {
            System.err.println("Failed to load portList.fxml");
            return null;
        }
    }
}
