import java.math.BigDecimal;

/**
 * Created by YunZhang on 29/7/17.
 */
public class Marks {
    private final Student student;
    private final String subjectId;
    private final BigDecimal marks;

    public Marks(Student student, String subjectId, BigDecimal marks) {
        this.student = student;
        this.subjectId = subjectId;
        this.marks = marks;
    }


}
