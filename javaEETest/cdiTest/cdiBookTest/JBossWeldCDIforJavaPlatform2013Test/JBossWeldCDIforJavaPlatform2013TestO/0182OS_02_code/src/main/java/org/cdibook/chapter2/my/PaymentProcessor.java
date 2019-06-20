package org.cdibook.chapter2.my;

import javax.inject.Inject;

public class PaymentProcessor {
    private Payment payment;

    @Inject
    void setPayment(Payment payment) {
        this.payment = payment;
    }
}
