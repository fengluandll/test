package clone.v2;

import java.util.Date;

/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class Employee implements Cloneable {

    private int id;

    private Date hireDate;

    @Override
    public Employee clone() throws CloneNotSupportedException {
        Employee cloned = (Employee)super.clone();

        // clone mutable fields
        cloned.hireDate = (Date) hireDate.clone();

        return cloned;
    }
}
