package ui;

import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.cell.PropertyValueFactory;
import model.Passenger;
import repository.AbstractRepository;
import repository.PassengerRepository;

import java.time.LocalDate;

public class PassengerListPane extends AbstractListPane<Passenger> {

    @FXML
    private TableColumn id;

    @FXML
    private TableColumn name;

    @FXML
    private TableColumn dateOfBirth;

    @FXML
    private TableColumn nationality;

    @FXML
    private TableColumn moneySpentOnCruise;

    @FXML
    private TableColumn homeAddress;

    @Override
    protected void setCellValueFactories() {
        id.setCellValueFactory(new PropertyValueFactory<Passenger, Long>("id"));
        name.setCellValueFactory(new PropertyValueFactory<Passenger, String>("name"));
        dateOfBirth.setCellValueFactory(new PropertyValueFactory<Passenger, LocalDate>("dateOfBirth"));
        nationality.setCellValueFactory(new PropertyValueFactory<Passenger, String>("nationality"));
        moneySpentOnCruise.setCellValueFactory(new PropertyValueFactory<Passenger, Double>("moneySpentOnCruise"));
        homeAddress.setCellValueFactory(new PropertyValueFactory<Passenger, String>("homeAddress"));
    }

    @Override
    protected AbstractRepository<Passenger> getRepositoryInstance() {
        return PassengerRepository.getInstance();
    }

    @Override
    protected String getAddModifyPaneFxmlFileName() {
        return "passengerAddModifyPane.fxml";
    }

    @Override
    protected String getEntityName() {
        return "Passenger";
    }
}
