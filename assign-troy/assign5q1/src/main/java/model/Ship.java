package model;

import java.util.HashSet;
import java.util.Set;

public class Ship extends Idable{
    private Set<Sailor> sailors = new HashSet<>();
    private Set<Long> sailorIds = new HashSet<>();
    // ship name
    private String name;
    /**
     * weight (tons)
     */
    private Double weight;
    // year built
    private Integer builtYear;

    // passenger capacity
    private Integer passengerCapacity;

    public Set<Sailor> getSailors() {
        return sailors;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Integer getBuiltYear() {
        return builtYear;
    }

    public void setBuiltYear(Integer builtYear) {
        this.builtYear = builtYear;
    }

    public Integer getPassengerCapacity() {
        return passengerCapacity;
    }

    public void setPassengerCapacity(Integer passengerCapacity) {
        this.passengerCapacity = passengerCapacity;
    }

    public void setSailors(Set<Sailor> sailors) {
        this.sailors = sailors;
    }

    public Set<Long> getSailorIds() {
        return sailorIds;
    }

    public void setSailorIds(Set<Long> sailorIds) {
        this.sailorIds = sailorIds;
    }
}
