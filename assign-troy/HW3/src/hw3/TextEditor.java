package hw3;

import java.io.*;
import java.nio.file.Files;
import java.util.Optional;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.beans.property.BooleanProperty;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Label;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuBar;
import javafx.scene.control.MenuItem;
import javafx.scene.control.SeparatorMenuItem;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextInputDialog;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.CornerRadii;
import javafx.scene.paint.Color;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

/**
 * TextEditor is a simple application to demonstrate how to develop an
 * end-to-end application with text-file as 'Model',
 * GUI as 'View', and various event-handlers as 'Controllers'
 */
public class TextEditor extends Application {
    Stage stage;
    BorderPane root = new BorderPane();    //holds all GUI components
    TextArea fileTextArea = new TextArea(); //displays the file content
    Label statusLabel = new Label();                //shows the status of various actions

    FileUtilities fileUtilities = new FileUtilities();

    BooleanProperty isFileClosed = new SimpleBooleanProperty(false);
    StringProperty fileContentProperty = new SimpleStringProperty();

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage stage) {
        this.stage = stage;
        setScreen();
        Scene scene = new Scene(root, 500, 600);
        stage.setTitle("Text Editor");
        stage.setScene(scene);
        stage.show();
    }

    public void setScreen() {
        //create menus
        Menu fileMenu = new Menu("File");
        Menu toolsMenu = new Menu("Tools");
        Menu helpMenu = new Menu("Help");

        //attach File menu items and their event handlers
        MenuItem openFileMenuItem = new MenuItem("Open");
        openFileMenuItem.setOnAction(new OpenFileHandler());
        MenuItem saveFileMenuItem = new MenuItem("Save");
        saveFileMenuItem.setOnAction(new SaveFileHandler());
        MenuItem closeFileMenuItem = new MenuItem("Close");
        closeFileMenuItem.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                fileTextArea.clear();
                statusLabel.setText("");
                root.setCenter(null);
                isFileClosed.set(true);
            }
        });
        MenuItem exitFileMenuItem = new MenuItem("Exit");
        exitFileMenuItem.setOnAction(actionEvent -> Platform.exit());

        //attach Tools menu items and their event handlers
        MenuItem searchToolsMenuItem = new MenuItem("Search");
        searchToolsMenuItem.setOnAction(new SearchToolHandler());
        MenuItem replaceToolsMenuItem = new MenuItem("Replace");
        replaceToolsMenuItem.setOnAction(new ReplaceToolHandler());
        MenuItem wordCountToolsMenuItem = new MenuItem("Word Count");
        wordCountToolsMenuItem.setOnAction(new WordCountToolHandler());
        MenuItem uniqueWordCountToolsMenuItem = new MenuItem("Unique word count");
        uniqueWordCountToolsMenuItem.setOnAction(new UniqueWordCountToolHandler());

        //set Help menu
        MenuItem aboutHelpMenuItem = new MenuItem("About");
        aboutHelpMenuItem.setOnAction(new AboutHandler());

        //set menubar
        MenuBar menuBar = new MenuBar();

        fileMenu.getItems().addAll(openFileMenuItem, saveFileMenuItem, closeFileMenuItem, new SeparatorMenuItem(), exitFileMenuItem);
        toolsMenu.getItems().addAll(searchToolsMenuItem, replaceToolsMenuItem, new SeparatorMenuItem(), wordCountToolsMenuItem, uniqueWordCountToolsMenuItem);
        helpMenu.getItems().addAll(aboutHelpMenuItem);
        menuBar.getMenus().addAll(fileMenu, toolsMenu, helpMenu);

        //set status bar
        statusLabel.setPrefWidth(this.stage.getMaxWidth());
        statusLabel.setBackground(new Background(new BackgroundFill(Color.LIGHTGRAY, CornerRadii.EMPTY, Insets.EMPTY)));

        //set layout
        root.setTop(menuBar);
        root.setBottom(statusLabel);

        //initialize bindings
        isFileClosed.set(true);
        toolsMenu.disableProperty().bind(isFileClosed);
        saveFileMenuItem.disableProperty().bind(isFileClosed);
        closeFileMenuItem.disableProperty().bind(isFileClosed);
        fileTextArea.textProperty().bindBidirectional(fileContentProperty);
    }

    /**
     * OpenHandler provides the functionality for opening a file when the File-Open menu option
     * is selected by the user.
     */
    private class OpenFileHandler implements EventHandler<ActionEvent> {
        @Override
        public void handle(ActionEvent event) {
            //write your code here
            FileChooser fileChooser = new FileChooser();
            fileChooser.setTitle("Open file");
            File chosenFile = fileChooser.showOpenDialog(stage);

            // when user chose file, chosenFile is not null
            if (chosenFile != null) {

                StringBuilder stringBuilder = fileUtilities.readFile(chosenFile.getAbsolutePath());
                fileTextArea.clear();
                fileContentProperty.setValue(stringBuilder.toString());
                fileTextArea.setWrapText(true);
                isFileClosed.set(false);
                statusLabel.setText(chosenFile.getName());
                root.setCenter(fileTextArea);
            }
        }
    }

    /**
     * getString() is a helper method that opens a dialog box to take user input for a 'purpose'.
     * This 'purpose' is meant to be either 'Search' or 'Replace' which
     * appears as the title and label in the dialog box.
     * The method returns the string entered by the user.
     * When user presses Cancel, it returns null.
     */
    private String getString(String purpose) {
        String inputString = null;
        TextInputDialog searchTextInputDialog = new TextInputDialog();
        searchTextInputDialog.setTitle(purpose);
        searchTextInputDialog.setHeaderText(String.format("%s string", purpose));
        searchTextInputDialog.setContentText(String.format("Enter %s string ", purpose));
        Optional<String> searchStringOptional = searchTextInputDialog.showAndWait();
        if (searchStringOptional.isPresent()) {
            statusLabel.setText("");
            inputString = searchStringOptional.get();
        }
        if (inputString == null || inputString.isEmpty()) return null;  //to handle empty string on Cancel
        else return inputString;
    }

    /**
     * SearchToolHandler provides the functionality for searching a string when the Tool-Search menu option
     * is selected by the user. It uses the getString() method as a helper method to capture the user input.
     */
    private class SearchToolHandler implements EventHandler<ActionEvent> {
        @Override
        public void handle(ActionEvent event) {
            String searchString = getString("Search");
            if (searchString != null) {
                StringBuilder fileContent = new StringBuilder(fileContentProperty.get());
                int[] positions = fileUtilities.searchAll(fileContent, searchString);
                if (positions != null) {
                    int caretPosition = fileTextArea.getCaretPosition(); //get current cursor position
                    int positionIndex = 0;		//first word position
                    while (positions[positionIndex] < caretPosition) { //get the position for search string after current cursor
                        positionIndex++;
                        if (positionIndex > positions.length-1) {  //if no search string after current cursor
                            positionIndex = 0;
                            break;
                        }
                    }
                    fileTextArea.positionCaret(positions[positionIndex]); //get cursor to which occurrence of search string was next to current cursor position found above
                    fileTextArea.selectPositionCaret(positions[positionIndex] + searchString.length());  //highlight the length of search string
                    statusLabel.setText(String.format("%s found %d times", searchString, positions.length));
                } else {
                    statusLabel.setText(String.format("%s not found", searchString));
                }
            } else statusLabel.setText("Search cancelled");
        }
    }

    /**
     * ReplaceToolHandler provides the functionality for searching and replaceing a string when the Tool-Replace menu option
     * is selected by the user. It uses the getString() method as a helper method to capture the user input.
     */
    private class ReplaceToolHandler implements EventHandler<ActionEvent> {
        @Override
        public void handle(ActionEvent event) {
            String searchString = getString("Search");
            if (searchString != null) {  //if not empty or cancelled
                StringBuilder fileContent = new StringBuilder(fileContentProperty.get());
                int[] positions = fileUtilities.searchAll(fileContent, searchString);
                if (positions == null) {  //if search string not found
                    statusLabel.setText(String.format("%s not found", searchString)); //print message and return
                } else {
                    String replaceString = getString("Replace");
                    if (replaceString != null) {
                        int count = fileUtilities.replace(fileContent, searchString, replaceString);
                        fileTextArea.setText(fileContent.toString());
                        if (count> 0) statusLabel.setText(String.format("%s found and replaced with %s at %d places", searchString, replaceString, count));
                        else statusLabel.setText(String.format("%s not found", searchString));
                    } else statusLabel.setText("Replace cancelled");
                }
            } else statusLabel.setText("Search cancelled");
        }
    }

    /**
     * WordCountToolHandler provides the functionality for counting the total number of words
     * in the text file that is currently open.
     */
    private class WordCountToolHandler implements EventHandler<ActionEvent> {
        @Override
        public void handle(ActionEvent event) {
            //write your code here
            String content = fileContentProperty.getValue();
            StringBuilder stringBuilder = new StringBuilder(content);
            int wordCount = fileUtilities.countWords(stringBuilder);
            String message = String.format("%d words", wordCount);
            statusLabel.setText(message);
        }
    }

    private class AboutHandler implements EventHandler<ActionEvent> {
        @Override
        public void handle(ActionEvent event) {
            Alert alert = new Alert(AlertType.INFORMATION);
            alert.setTitle("About");
            alert.setHeaderText("Heinz Text Editor");
            alert.setContentText("Version 1.0 \nRelease 1.0\nCopyright CMU\nDeveloped by a minion!");
            Image image = new Image(this.getClass().getResource("image.png").toString());
            ImageView imageView = new ImageView();
            imageView.setImage(image);
            imageView.setFitWidth(150);
            imageView.setPreserveRatio(true);
            imageView.setSmooth(true);
            alert.setGraphic(imageView);
            alert.showAndWait();
        }
    }


    /**
     * UniqueWordCountToolHandler provides the count of unique words in the text file currently open
     */
    private class UniqueWordCountToolHandler implements EventHandler<ActionEvent> {
        @Override
        public void handle(ActionEvent event) {
            String content = fileContentProperty.getValue();
            StringBuilder stringBuilder = new StringBuilder(content);
            int wordCount = fileUtilities.countUniqueWords(stringBuilder);
            String message = String.format("%d words", wordCount);
            statusLabel.setText(message);
        }
    }

    /**
     * SaveFileHandler provides the FileChooser dialog box to save the current file
     */
    private class SaveFileHandler implements EventHandler<ActionEvent> {
        @Override
        public void handle(ActionEvent event) {
            //write your code here
            FileChooser fileChooser = new FileChooser();
            fileChooser.setTitle("Save file");
            File file = fileChooser.showSaveDialog(stage);
            if (file != null) {
                String result = fileUtilities.writeFile(file.getAbsolutePath(), fileContentProperty.getValue());
                statusLabel.setText(result);
            }

        }
    }


}
