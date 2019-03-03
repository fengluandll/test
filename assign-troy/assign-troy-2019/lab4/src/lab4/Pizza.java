package lab4;

public class Pizza extends Food implements Heatable {

    final static int PIZZA_CALORIES = 800;

    public Pizza() {
        calories += PIZZA_CALORIES;
        System.out.println("Serving Pizza");
    }

    @Override
    public String eat() {
        return "Chomp Chomp";
    }

    @Override
    public void heatIt() {
        temperature = Heatable.HOTSERVINGTEMPERATURE;
    }
}
