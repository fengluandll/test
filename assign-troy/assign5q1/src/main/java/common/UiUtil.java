package common;

import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;
import model.common.WindowResult;

import java.io.IOException;

import static javafx.stage.Modality.APPLICATION_MODAL;

public class UiUtil {

    public static <T> WindowResult<T> showModalWindow(String stageTitle, Class<?> aClass, String fxmlFileName) {
        // open the portList stage
        Parent root;
        try {
            FXMLLoader loader = new FXMLLoader(aClass.getResource(fxmlFileName));
            root = loader.load();
            T controller = loader.getController();
            Stage stage = new Stage();
            stage.initModality(APPLICATION_MODAL);
            stage.setTitle(stageTitle);
            stage.setScene(new Scene(root, 800, 600));
            // set menu item event handlers
            stage.show();
            return new WindowResult(stage, controller);
        } catch (IOException e) {
            System.err.println("Failed to load portList.fxml");
            return null;
        }
    }
}
