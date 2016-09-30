package clone.v1;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class Employee implements Cloneable {
    @Override
    public Employee clone() throws CloneNotSupportedException {
        return (Employee) super.clone();
    }
}
