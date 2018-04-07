package c02.list_2_6;

public class GreeterClass {
    public static void main(String[] args) {
        final String greeting = "Hello, ";
        Greeter greeter = new Greeter() {
            @Override
            public String createGreeting(String whom) {
                return greeting + whom + "!";
            }
        };
        greetWorld(greeter);
    }


    public static void greetWorld(Greeter greeter) {
        System.out.println(greeter.createGreeting("World"));
    }
}
