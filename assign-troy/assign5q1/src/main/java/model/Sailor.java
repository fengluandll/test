package model;

import java.time.LocalDate;

public class Sailor {
    private int identificationNumber;
    private String name;
    private LocalDate dateOfBirth;
    private String nationality;
    private Sailor supervisor;

    public int getIdentificationNumber() {
        return identificationNumber;
    }

    public void setIdentificationNumber(int identificationNumber) {
        this.identificationNumber = identificationNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public Sailor getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(Sailor supervisor) {
        this.supervisor = supervisor;
    }
}
