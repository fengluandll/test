public class InvertBool {

    private String name;

    public InvertBool(String name) {
        this.name = name;
    }

    private boolean isValid(int a) {
        System.out.println(getName());
        return a <= 15 || a >= 100;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
