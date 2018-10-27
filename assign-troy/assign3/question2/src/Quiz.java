import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Quiz {
	
	private int totalAnswers = 0;
	private int correctAnswers = 0;
	
	private final int MAX_QUESTIONS = 25;
	
	private List<Question> questions = new ArrayList<Question>();
	
	public void add(Question question) {
		if (questions.size() <= MAX_QUESTIONS) {
			questions.add(question);
		} else {
			throw new IllegalStateException("At maximum " + MAX_QUESTIONS + " are added");
		}
	}
	
	public void giveQuiz() {
		giveQuiz(questions);
	}
	
	public void giveQuiz(int lowComplexity, int highComplexity) {
		// get the questions with the complexity range
		List<Question> filtered = questions.stream()
				.filter(question -> question.getComplexity() >= lowComplexity && question.getComplexity() <= highComplexity)
				.collect(Collectors.toList());
		giveQuiz(filtered);
	}
	
	private void giveQuiz(List<Question> questions2) {
		Scanner scanner = new Scanner(System.in);
		for(Question question: questions2) {
			System.out.println("Please input the anwser for the question\"" + question.getQuestion() + '"');
			String answer = null;
			do {
				answer = scanner.next();
			} while(answer == null);
			boolean isRight = question.answerCorrect(answer);
			totalAnswers++;
			if (isRight) {
				correctAnswers++;
			}
		}
	}

	public int getTotalAnswers() {
		return totalAnswers;
	}

	public int getCorrectAnswers() {
		return correctAnswers;
	}
	
}
