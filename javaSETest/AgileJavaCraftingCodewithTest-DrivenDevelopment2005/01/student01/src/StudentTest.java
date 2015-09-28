import junit.framework.TestCase;

/**
 * Created by Yun on 28/09/2015.
 */
public class StudentTest extends TestCase {
    public void testCreate() {
        final String firstStudentName = "Jane Doe";

        Student firstStudent = new Student(firstStudentName);
        assertEquals(firstStudentName, firstStudent.getName());

        final String secondStudentName = "Joe Blow";
        Student secondStudent = new Student(secondStudentName);
        assertEquals(secondStudentName,secondStudent.getName());

        assertEquals(firstStudentName, firstStudent.getName());
    }
}