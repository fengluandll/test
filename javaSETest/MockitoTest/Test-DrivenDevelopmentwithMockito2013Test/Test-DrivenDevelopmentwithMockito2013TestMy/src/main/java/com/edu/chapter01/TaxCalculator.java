package com.edu.chapter01;

public class TaxCalculator {
    public double calculate(double taxableIncome) {
        if (taxableIncome > 500000) {
            return 110000;
        }
        return taxableIncome / 10;
    }
}
