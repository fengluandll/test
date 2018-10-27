import java.util.Scanner;

public class QuizTime {

	public static void main(String[] args) {
		// populate quiz
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Please input the minimum complexity :");
		int lowComplexity = scanner.nextInt();
		System.out.println("Please input the maximum complexity :");
		int highComplexity = scanner.nextInt();
		
		Quiz quiz1 = new Quiz();
		populateQuestions(quiz1);
		quiz1.giveQuiz(lowComplexity, highComplexity);
		System.out.println(quiz1.getCorrectAnswers() + " out of " + quiz1.getTotalAnswers() + " questions are right");
		
		Quiz quiz2 = new Quiz();
		populateQuestions(quiz2);
		quiz2.giveQuiz();
		System.out.println(quiz2.getCorrectAnswers() + " out of " + quiz2.getTotalAnswers() + " questions are right");
	}
	
	private static void populateQuestions(Quiz quiz) {
		for(int i = 0; i < 3 ; i++) {
			for(int j = 0; j < 4 ; j++) {
				int complexity = i + j;
				String text = String.valueOf(i) + " times " + String.valueOf(j) + " is ";
				Question question = new Question(text, String.valueOf(i * j));
				question.setComplexity(complexity);
				quiz.add(question);
			}
		}
	}
}
