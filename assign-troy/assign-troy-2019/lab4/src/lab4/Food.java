package lab4;

public abstract class Food {
    protected static int calories = 0;
    protected int temperature;

    public Food() {
    }

    public abstract String eat();
}
