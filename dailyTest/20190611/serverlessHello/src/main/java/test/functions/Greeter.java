package test.functions;

import org.springframework.beans.factory.annotation.Value;

import java.util.function.Function;

public class Greeter implements Function<String, String> {

    @Value("${test.name}")
    private String name;

    @Override
    public String apply(String s) {
        return name + " Hello " + s + ", and welcome " +
                "to Spring Cloud Function!!!";
    }
}
