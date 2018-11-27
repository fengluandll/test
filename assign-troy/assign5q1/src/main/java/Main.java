import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception{
        Parent root = FXMLLoader.load(getClass().getResource("ui/mainPane.fxml"));
        primaryStage.setTitle("Cruise Management");
        primaryStage.setScene(new Scene(root, 1024, 800));
        // set menu item event handlers
        primaryStage.show();
    }


    public static void main(String[] args) {

        launch(args);

//        // Create a cruise (with ships, sailors, ports)
//        final Cruise cruise = new Cruise();
//        final NumberGenerator cruiseNumberGenerator = new NumberGenerator();
//        cruise.setSerialNumber(cruiseNumberGenerator.next());
//        cruise.setDeparturePort(departingPort);
//        cruise.setShip(ship);
//        cruise.setSailingDate(LocalDate.of(2018, 1, 3));
//        cruise.setReturnDate(LocalDate.of(2018, 8, 31));
//
//        final NumberGenerator sailorNumberGenerator = new NumberGenerator();
//        final Sailor david = new Sailor();
//        david.setIdentificationNumber(sailorNumberGenerator.next());
//        david.setName("David");
//        david.setNationality("UK");
//        david.setDateOfBirth(LocalDate.of(1987, 3, 4));
//
//        // Add passengers to a cruise
//        final NumberGenerator passengerNumberGenerator = new NumberGenerator();
//        final Passenger jacob = new Passenger();
//        jacob.setNumber(passengerNumberGenerator.next());
//        jacob.setName("Jacob");
//        jacob.setNationality("UK");
//        jacob.setHomeAddress("88 Church Street, Highgate");
//        jacob.setDateOfBirth(LocalDate.of(1985, 2, 23));
//        jacob.setMoneySpentOnCruise(568);
//        cruise.getSailedPassengers().add(jacob);
//
//        final Passenger bob = new Passenger();
//        bob.setNumber(passengerNumberGenerator.next());
//        bob.setName("Bob");
//        bob.setNationality("Australia");
//        bob.setHomeAddress("3 King William St, Adelaide 5000");
//        bob.setDateOfBirth(LocalDate.of(1981, 4, 12));
//        bob.setMoneySpentOnCruise(888);
//        cruise.getSailedPassengers().add(bob);
//
//        // Revenue generated from the cruise passengers by nationality
//        Map<String, Double> revenueByNationality = cruise.getSailedPassengers()
//                .stream()
//                .collect(groupingBy(Passenger::getNationality, summingDouble(passenger -> passenger.getMoneySpentOnCruise())));
//        System.out.println("Revenue generated from the cruise passengers by nationality:");
//        System.out.println(revenueByNationality);
//
//        // Revenue generated from the cruise passengers by age
//        Map<Integer, Double> revenueByAge = cruise.getSailedPassengers()
//                .stream()
//                .collect(groupingBy(Passenger::getAge, summingDouble(passenger -> passenger.getMoneySpentOnCruise())));
//        System.out.println("Revenue generated from the cruise passengers by age:");
//        System.out.println(revenueByAge);
//
//        //List of passengers sorted by MoneySpentOnCruise
//        List<Passenger> passengersSorted = new ArrayList<>();
//        for (Passenger passenger1 : cruise.getSailedPassengers()) {
//            passengersSorted.add(passenger1);
//        }
//        passengersSorted.sort(Comparator.comparingDouble(passenger -> passenger.getMoneySpentOnCruise()));
//        System.out.println("List of passengers sorted by MoneySpentOnCruise");
//        passengersSorted.forEach(System.out::println);
//
//        // each passenger completes a 6-10 question survey and generate/store random responses
//        List<Survey> surveys = cruise.getSailedPassengers()
//                .stream()
//                .map(passenger -> {
//                    final Survey survey = new Survey();
//                    survey.setPassenger(passenger);
//                    // answer questions
//                    final Random random = new Random();
//                    survey.getQuestions().stream().forEach(question -> question.setRating(random.nextInt(10) + 1));
//                    return survey;
//                })
//                .collect(Collectors.toList());
//
//        System.out.println("Cruise evaluation report by passengers:");
//        for (Survey survey : surveys) {
//            System.out.println("The satisfaction rate of " + survey.getPassenger().getName() + " is " + survey.getAverageRating());
//        }
    }


}
