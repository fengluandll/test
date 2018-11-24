package model;

public class Port {
    private int id;
    private String country;
    private String name;
    private int population;
    // whether a passport is required for the passengers to disembark there
    private boolean passwordRequired;
    // its current docking fee
    private double dockingFee;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

    public boolean isPasswordRequired() {
        return passwordRequired;
    }

    public void setPasswordRequired(boolean passwordRequired) {
        this.passwordRequired = passwordRequired;
    }

    public double getDockingFee() {
        return dockingFee;
    }

    public void setDockingFee(double dockingFee) {
        this.dockingFee = dockingFee;
    }
}
