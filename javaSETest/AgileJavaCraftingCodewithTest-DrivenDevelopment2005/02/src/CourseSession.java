import java.util.ArrayList;

/**
 *
 * Created by Yun on 29/09/2015.
 */
public class CourseSession {
    private String department;
    private String number;
    private java.util.ArrayList<Student> students =
            new java.util.ArrayList<Student>();

    public CourseSession(String department, String number) {
        this.department = department;
        this.number = number;
    }

    public String getDepartment() {
        return department;
    }

    public String getNumber() {
        return number;
    }

    public int getNumberOfStudents() {
        return students.size();
    }

    public void enroll(Student student) {
        students.add(student);
    }

    public ArrayList<Student> getAllStudents() {
        return students;
    }
}