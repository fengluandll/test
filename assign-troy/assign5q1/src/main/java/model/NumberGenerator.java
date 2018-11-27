package model;

public class NumberGenerator {
    private int number = 1;

    public int next() {
        return number++;
    }
}
