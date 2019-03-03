package lab4;

public class IceCream extends Food {

    final static int ICECREAM_CALORIES = 500;

    public IceCream() {
        calories += ICECREAM_CALORIES;
        System.out.println("Serving Ice cream");
    }

    @Override
    public String eat() {
        return "Slurp Slurp";
    }
}
