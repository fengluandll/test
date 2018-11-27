package model;

public class Port extends Idable {
    private String country;
    private String name;
    private Integer population;
    // whether a passport is required for the passengers to disembark there
    private boolean passportRequired;
    // its current docking fee
    private Double dockingFee;

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPopulation() {
        return population;
    }

    public void setPopulation(Integer population) {
        this.population = population;
    }

    public boolean isPassportRequired() {
        return passportRequired;
    }

    public void setPassportRequired(boolean passportRequired) {
        this.passportRequired = passportRequired;
    }

    public Double getDockingFee() {
        return dockingFee;
    }

    public void setDockingFee(Double dockingFee) {
        this.dockingFee = dockingFee;
    }

    @Override
    public String toString() {
        return name + " #" + getId();
    }
}
