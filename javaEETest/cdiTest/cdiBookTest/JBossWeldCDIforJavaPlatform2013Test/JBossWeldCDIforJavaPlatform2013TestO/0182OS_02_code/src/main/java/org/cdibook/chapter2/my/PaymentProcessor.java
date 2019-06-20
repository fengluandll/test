package org.cdibook.chapter2.my;

import org.jetbrains.annotations.Contract;

import javax.enterprise.inject.Produces;
import javax.inject.Inject;

public class PaymentProcessor {
    private Payment payment;

    @Contract(pure = true)
    public PaymentProcessor() {
    }

    @Contract(pure = true)
    public PaymentProcessor(Payment payment) {
        this.payment = payment;
    }

    @Produces
    PaymentProcessor createProcessor(Payment payment) {
        return new PaymentProcessor();
    }
}
