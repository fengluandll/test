package model;

import java.util.HashSet;
import java.util.Set;

public class Ship extends Idable{
    private Set<Sailor> sailors = new HashSet<>();
    // ship name
    private String name;
    /**
     * weight (tons)
     */
    private double weight;
    // year built
    private int builtYear;

    // passenger capacity
    private int passengerCapacity;

    public Set<Sailor> getSailors() {
        return sailors;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public int getBuiltYear() {
        return builtYear;
    }

    public void setBuiltYear(int builtYear) {
        this.builtYear = builtYear;
    }

    public int getPassengerCapacity() {
        return passengerCapacity;
    }

    public void setPassengerCapacity(int passengerCapacity) {
        this.passengerCapacity = passengerCapacity;
    }
}
