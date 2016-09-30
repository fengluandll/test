/**
 * Created by Allbts-IT on 30/09/2016.
 */
public class PersonNew {
    private String firstName;
    private String lastName;

    public PersonNew(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Person{");
        sb.append("firstName='").append(firstName).append('\'');
        sb.append(",lastName='").append(lastName).append('\'');
        sb.append('}');
        return sb.toString();
    }
}


