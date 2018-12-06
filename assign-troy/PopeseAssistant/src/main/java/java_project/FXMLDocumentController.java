/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package java_project;

import edu.cmu.sphinx.frontend.util.Microphone;
import java.io.File;
import java.net.URL;
import java.util.Locale;
import java.util.ResourceBundle;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import org.alicebot.ab.*;
import javax.speech.*;
import javax.speech.Engine;
import javax.speech.recognition.Recognizer;
import javax.speech.recognition.RecognizerModeDesc;
import javax.speech.recognition.Result;
import javax.speech.recognition.ResultEvent;
import javax.speech.recognition.ResultListener;
import javax.speech.recognition.ResultToken;
import javax.speech.synthesis.JSMLException;
import javax.speech.synthesis.Synthesizer;
import javax.speech.synthesis.SynthesizerModeDesc;

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
    @FXML
    private Button voice;
    
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
        TranscribeStreamingAsyncClient s;
        
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

    @FXML
    private void useVoice(ActionEvent event) throws EngineException, AudioException, InterruptedException, JSMLException {
     // Synthesizer synthesizer;
     System.setProperty("freetts.voices", 
                "com.sun.speech.freetts.en.us.cmu_us_kal.KevinVoiceDirectory");  
            // Register Engine 
    Central.registerEngineCentral 
                ("com.sun.speech.freetts.jsapi.FreeTTSEngineCentral");

        TranscribeStreamingAsyncClient f;
//    Recognizer recognizer = Central.createRecognizer(new EngineModeDesc(Locale.ENGLISH));
//       recognizer.allocate();
//       recognizer.addResultListener(new res());
//       recognizer.requestFocus();
//      recognizer.resume();

       
//       //recognizer.resume();
//       String a=recognizer.toString();
//        System.out.println("You said"+a);
//        final Object log = new Object();
//        Result result;


        Synthesizer synthesizer = Central.createSynthesizer(new SynthesizerModeDesc(Locale.US));
        
        synthesizer.allocate();
        synthesizer.resume();
        synthesizer.waitEngineState(Engine.RESUMED);
        String s = entertext.getText();
        synthesizer.speak(s, null);
        System.out.println("");
        
        
//          voce.SpeechInterface.synthesize("Hello World");
//          while (voce.SpeechInterface.getRecognizerQueueSize()>0) {            
//            String s = voce.SpeechInterface.popRecognizedString();
//            System.out.println("You said: " + s);
//        }
       
    }

    private static class res implements ResultListener{
         static Recognizer rec;

        public res() {
        }

        @Override
        public void audioReleased(ResultEvent re) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }

        @Override
        public void grammarFinalized(ResultEvent re) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }

        @Override
        public void resultAccepted(ResultEvent re) {
               Result r = (Result) re.getSource();
               ResultToken tokens[] = r.getBestTokens();

    for (int i = 0; i < tokens.length; i++)
    {
        System.out.print(tokens[i].getSpokenText() + " ");
        }
             try {
                 rec.deallocate();
             } catch (EngineException ex) {
                 Logger.getLogger(FXMLDocumentController.class.getName()).log(Level.SEVERE, null, ex);
             } catch (EngineStateError ex) {
                 Logger.getLogger(FXMLDocumentController.class.getName()).log(Level.SEVERE, null, ex);
             }

        }
        

        @Override
        public void resultCreated(ResultEvent re) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }

        @Override
        public void resultRejected(ResultEvent re) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }

        @Override
        public void resultUpdated(ResultEvent re) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }

        @Override
        public void trainingInfoReleased(ResultEvent re) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }
    }
    
}
