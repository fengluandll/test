package com.edu.chapter01;

import org.junit.Test;

import static org.junit.Assert.assertTrue;

public class TaxCalculatorTest {
    @Test
    public void when_income_less_than_5Lacs_then_deducts_10_percent_tax(){
        TaxCalculator taxCaculator = new TaxCalculator();
        double payableTax = taxCaculator.calculate(400000);
        assertTrue(40000 == payableTax);

        payableTax = taxCaculator.calculate(0);
        assertTrue(0 == payableTax);

        payableTax = taxCaculator.calculate(500000.00);
        assertTrue(50000 == payableTax);
    }
}
