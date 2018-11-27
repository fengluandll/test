package model;

import java.time.LocalDate;
import java.util.LinkedList;
import java.util.List;

public class Cruise extends Idable {
    // sailing date
    private LocalDate sailingDate;
    // return date
    private LocalDate returnDate;
    // departure port
    private Port departurePort;
    private Ship ship;
    private List<Port> portsOfAll = new LinkedList<>();
    private List<Sailor> sailors = new LinkedList<>();
    private List<Passenger> bookedPassengers = new LinkedList<>();
    private List<Passenger> sailedPassengers = new LinkedList<>();

    public LocalDate getSailingDate() {
        return sailingDate;
    }

    public void setSailingDate(LocalDate sailingDate) {
        this.sailingDate = sailingDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public Ship getShip() {
        return ship;
    }

    public void setShip(Ship ship) {
        this.ship = ship;
    }

    public List<Port> getPortsOfAll() {
        return portsOfAll;
    }

    public List<Sailor> getSailors() {
        return sailors;
    }

    public List<Passenger> getBookedPassengers() {
        return bookedPassengers;
    }

    public List<Passenger> getSailedPassengers() {
        return sailedPassengers;
    }

    public void setPortsOfAll(List<Port> portsOfAll) {
        this.portsOfAll = portsOfAll;
    }

    public void setSailors(List<Sailor> sailors) {
        this.sailors = sailors;
    }

    public void setBookedPassengers(List<Passenger> bookedPassengers) {
        this.bookedPassengers = bookedPassengers;
    }

    public void setSailedPassengers(List<Passenger> sailedPassengers) {
        this.sailedPassengers = sailedPassengers;
    }

    public Port getDeparturePort() {
        return departurePort;
    }

    public void setDeparturePort(Port departurePort) {
        this.departurePort = departurePort;
    }

    public String getDeparturePortName() {
        return departurePort == null ? null : departurePort.getName();
    }

    public String getShipName() {
        return ship == null ? null : ship.getName();
    }
}
