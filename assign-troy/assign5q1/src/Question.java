public class Question {
    private String question;
    private int rating;

    public Question(String question) {
        this.question = question;
    }

    public String getQuestion() {
        return question;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
