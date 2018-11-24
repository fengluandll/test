package model;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

public class Survey {

    private Passenger passenger;

    private List<Question> questions = new LinkedList<>();

    public Survey() {
        for (int i = 0; i < 8; i++) {
            questions.add(new Question("Question " + (i + 1)));
        }
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public double getAverageRating() {
        return questions.stream()
                .collect(Collectors.averagingDouble(question -> question.getRating()));
    }
}
