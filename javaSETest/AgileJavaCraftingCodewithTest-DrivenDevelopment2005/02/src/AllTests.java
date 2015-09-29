import junit.framework.TestSuite;

/**
 * Created by Yun on 29/09/2015.
 */
public class AllTests {
    public static TestSuite suite(){
        junit.framework.TestSuite suite =
                new junit.framework.TestSuite();
        suite.addTestSuite(StudentTest.class);
        suite.addTestSuite(CourseSessionTest.class);
        return suite;
    }
}
