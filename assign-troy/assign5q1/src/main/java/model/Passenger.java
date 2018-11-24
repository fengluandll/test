package model;

import java.time.LocalDate;

public class Passenger {
    // unique passenger number
    private int number;
    private String name;
    //home address
    private String homeAddress;
    private String nationality;
    private LocalDate dateOfBirth;
    // MoneySpentOnCruise (calculated by totalling amount of money spent by the passenger on-board cruise)
    private double moneySpentOnCruise;

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHomeAddress() {
        return homeAddress;
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public double getMoneySpentOnCruise() {
        return moneySpentOnCruise;
    }

    public void setMoneySpentOnCruise(double moneySpentOnCruise) {
        this.moneySpentOnCruise = moneySpentOnCruise;
    }

    public Integer getAge() {
        return LocalDate.now().getYear() - dateOfBirth.getYear();
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Passenger{");
        sb.append("number=").append(number);
        sb.append(", name='").append(name).append('\'');
        sb.append(", homeAddress='").append(homeAddress).append('\'');
        sb.append(", nationality='").append(nationality).append('\'');
        sb.append(", dateOfBirth=").append(dateOfBirth);
        sb.append(", moneySpentOnCruise=").append(moneySpentOnCruise);
        sb.append('}');
        return sb.toString();
    }
}
