package model;

public class Port {
    private long id;
    private String country;
    private String name;
    private int population;
    // whether a passport is required for the passengers to disembark there
    private boolean passwordRequired;
    // its current docking fee
    private double dockingFee;

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Port{");
        sb.append("id=").append(id);
        sb.append(", country='").append(country).append('\'');
        sb.append(", name='").append(name).append('\'');
        sb.append(", population=").append(population);
        sb.append(", passwordRequired=").append(passwordRequired);
        sb.append(", dockingFee=").append(dockingFee);
        sb.append('}');
        return sb.toString();
    }
}
