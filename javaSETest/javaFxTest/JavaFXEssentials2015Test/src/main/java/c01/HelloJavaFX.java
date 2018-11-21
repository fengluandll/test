package c01;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;
import javafx.stage.Stage;

import static javafx.geometry.Pos.CENTER;

public class HelloJavaFX extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        Button btn = new Button();
        Text message = new Text();
        btn.setText("HelloJavaFX");
        btn.setOnAction(event ->
                message.setText("Hello World! JavaFX style :)"));
        VBox root = new VBox(10, btn, message);
        root.setAlignment(CENTER);
        Scene scene = new Scene(root, 300, 250);
        primaryStage.setTitle("Hello JavaFX 8 World!");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
