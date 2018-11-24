package model;

public class Port {
    private long id;
    private String country;
    private String name;
    private Integer population;
    // whether a passport is required for the passengers to disembark there
    private boolean passportRequired;
    // its current docking fee
    private Double dockingFee;

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
        final StringBuilder sb = new StringBuilder("Port{");
        sb.append("id=").append(id);
        sb.append(", country='").append(country).append('\'');
        sb.append(", name='").append(name).append('\'');
        sb.append(", population=").append(population);
        sb.append(", passportRequired=").append(passportRequired);
        sb.append(", dockingFee=").append(dockingFee);
        sb.append('}');
        return sb.toString();
    }
}
