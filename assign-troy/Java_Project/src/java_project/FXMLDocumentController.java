/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package java_project;

import java.io.File;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import org.alicebot.ab.*;

/**
 *
 * @author Rahul Jindal
 */
public class FXMLDocumentController implements Initializable {
    
    private Label label;
    @FXML
    private Button submit;
    @FXML
    private TextField entertext;
    @FXML
    private TextArea displaytext;
    private String s_display="";
    static String botName = "super";
    private static final boolean TRACE_MODE = false;
    
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
        
    }    

    @FXML
    private void submitButton(ActionEvent event) {
        String resourcesPath = getResourcesPath();
        System.out.println("\n\n\n"+resourcesPath+"\n\n\n");
        MagicBooleans.trace_mode = TRACE_MODE;
        Bot bot = new Bot("super", resourcesPath);   
        Chat chatSession = new Chat(bot);
        bot.brain.nodeStats();
       
        String s = entertext.getText();
        
          String response = chatSession.multisentenceRespond(s);
        
        s_display = s_display +"User: " +s + "\n"+"Bot: " +response +"\n";
        displaytext.setText(s_display);
        entertext.setText("");
        
    }

    private static String getResourcesPath() {
        File currDir = new File(".");
        String path = currDir.getAbsolutePath();
        path = path.substring(0, path.length() - 2);
        System.out.println(path);
        String resourcesPath = path + File.separator + "src" + File.separator + "main" + File.separator + "resources";
        return resourcesPath;
    }
    
}
