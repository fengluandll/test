import org.junit.Test;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by YunZhang on 29/7/17.
 */
public class TeacherTest {
    @Test
    public void generateGrade() throws Exception {
    }

    @Test
    public void when_marks_above_seventy_five_percent_returns_very_good() {
        DummyStudent dummyStudent = new DummyStudent();

        Marks inEnglish = new Marks(dummyStudent, "English-X",
                new BigDecimal("81.00"));
        Marks inMaths = new Marks(dummyStudent, "Math-X", new BigDecimal(
                "97.00"));
        Marks inHistory = new Marks(dummyStudent, "History-X", new BigDecimal(
                "79.00"));

        List<Marks> marks = new ArrayList<>();
        marks.add(inHistory);
        marks.add(inMaths);
        marks.add(inEnglish);

        Grades grade = new Teacher().generateGrade(marks);
        assertEquals(Grades.VeryGood, grade);
    }

}