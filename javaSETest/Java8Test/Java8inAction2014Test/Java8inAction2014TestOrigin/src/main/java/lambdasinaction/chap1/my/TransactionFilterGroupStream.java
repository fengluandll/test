package lambdasinaction.chap1.my;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by Allbts-IT on 23/09/2016.
 */
public class TransactionFilterGroupStream {
    public static void main(String[] args) {
        List<Transaction> transactions = Arrays.asList(new Transaction(Currency.getInstance(Locale.CHINA),2000,100),
                new Transaction(Currency.getInstance(Locale.CHINA),2001,2020),
                new Transaction(Currency.getInstance(Locale.CHINA),2020,3000));

        Map<Currency, List<Transaction>> transactionsByCurrencies =
                transactions.stream().filter((Transaction t) -> t.getPrice() > 1000)
                .collect(Collectors.groupingBy(Transaction::getCurrency));

        System.out.println(transactionsByCurrencies);
    }
}
