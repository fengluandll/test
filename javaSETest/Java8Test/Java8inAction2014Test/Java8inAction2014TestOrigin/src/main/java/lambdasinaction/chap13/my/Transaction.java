package lambdasinaction.chap13.my;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class Transaction {
    private int value;

    public Transaction(int value) {
        this.value = value;
    }

    public static void main(String[] args) {
        List<Transaction> transactions = Arrays.asList(new Transaction(2), new Transaction(4));

        Optional<Transaction> mostExpensive = transactions.stream()
                .max(Comparator.comparing(Transaction::getValue));
    }

    public int getValue() {
        return value;
    }
}
