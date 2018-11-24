package ui;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import model.Port;
import repository.PortRepository;

import java.util.List;

/**
 * The Controller class for mainStage.fxml
 */
public class MainStageController {


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

        final List<Port> ports=  PortRepository
                .getInstance()
                .findAll();

        ports.forEach(port -> System.out.println(port));


    }
}
