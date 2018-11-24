package ui;

import javafx.fxml.Initializable;
import model.Port;
import repository.PortRepository;

import java.net.URL;
import java.util.List;
import java.util.ResourceBundle;

public class PortListStage implements Initializable {
    @Override
    public void initialize(URL location, ResourceBundle resources) {
        final List<Port> ports=  PortRepository
                .getInstance()
                .findAll();
        ports.forEach(System.out::println);
    }


}
