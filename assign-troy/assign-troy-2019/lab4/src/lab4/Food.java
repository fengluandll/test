package lab4;

public abstract class Food {
    static int calories = 0;
    protected int temperature;

    public Food() {
        System.out.println("Here comes food!");
    }

    public abstract String eat();

    public void printCalories() {
        System.out.println("You have consumed " + calories + " calories");
    }
}
