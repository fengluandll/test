package model;

import java.time.LocalDate;

public class Sailor extends Idable {
    private String name;
    private LocalDate dateOfBirth;
    private String nationality;
    private Long supervisorId;
    private Sailor supervisor;

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

    public Long getSupervisorId() {
        return supervisorId;
    }

    public void setSupervisorId(Long supervisorId) {
        this.supervisorId = supervisorId;
    }

    public String getSupervisorName() {
        if (supervisor != null) {
            return supervisor.name;
        } else {
            return null;
        }
    }
}
