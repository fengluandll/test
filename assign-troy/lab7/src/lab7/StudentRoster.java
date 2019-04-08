package lab7;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

/**StudentRoster class reads data from roster.csv file and loads Student objects into its studentList.
 * It has two inner classes FirstNameComparator and ScoreComparator to sort students on their firstName and score respectively.
 */
public class StudentRoster {
	List<Student> studentList = new ArrayList<>();
	
	//Do not change this method
	public static void main(String[] args) {
		StudentRoster sr = new StudentRoster();
		sr.readData();
		sr.sortByLastName();
		System.out.println("********************** Sorted by Last name **********************");
		sr.printRoster();
		sr.sortByFirstName();
		System.out.println("********************** Sorted by First name **********************");
		sr.printRoster();
		sr.sortByScore();
		System.out.println("********************** Sorted by Score **********************");
		sr.printRoster();
	}
	
	//Do not change this method
	void printRoster() {
		System.out.println(" #. Last name\t\tFirst name\tAndrew ID\tScore");
		System.out.println("----------------------------------------------------------------------");
		int count = 1;
		for (Student s: studentList) System.out.printf("%2d. %-15s\t%-15s\t%-10s\t%.2f%n", count++,
				s.lastName, s.firstName, s.andrewID, s.score);
	}
	
	/**readData() method opens and reads roster.csv file and 
	 * loads the studentList arrayList with Student objects. 
	 */
	void readData() {
		try {
			Scanner scanner = new Scanner(new File("roster.csv"));
			while (scanner.hasNextLine()) {
				String line = scanner.nextLine();
				if (line != null) {
					String[] fields = line.split(",");
					if (fields.length >= 4) {
						Student student = new Student(fields[0], fields[1], fields[2], Float.parseFloat(fields[3]));
						studentList.add(student);
					}
				}
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	
	void sortByLastName() {
		//write your code here
		Collections.sort(studentList);
	}
	
	void sortByFirstName() {
		studentList.sort(new FirstNameComparator());
	}
	
	void sortByScore() {
		//write your code here
		studentList.sort(new ScoreComparator());
	}

	//write your Comparators here
	private static class FirstNameComparator implements Comparator<Student> {
		@Override
		public int compare(Student student1, Student student2) {
			return student1.firstName.compareTo(student2.firstName);
		}
	}

	private static class ScoreComparator implements Comparator<Student> {
		@Override
		public int compare(Student student1, Student student2) {
			// used for descending order of scores
			return Float.compare(student2.score, student1.score);
		}
	}

}
