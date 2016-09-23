package lambdasinaction.chap1.my;

import java.util.*;

/**
 * Created by Allbts-IT on 23/09/2016.
 */
public class TransactionFilterGroup {
    public static void main(String[] args) {
        List<Transaction> transactions = Arrays.asList(new Transaction(Currency.getInstance(Locale.CHINA),2000,100),
                new Transaction(Currency.getInstance(Locale.CHINA),2001,2020),
                new Transaction(Currency.getInstance(Locale.CHINA),2020,3000));

        Map<Currency, List<Transaction>> transactionsByCurrencies = new HashMap<>();

        for (Transaction transaction : transactions ){
            if(transaction.getPrice() > 1000){
                Currency currency = transaction.getCurrency();
                List<Transaction> transactionsForCurrency = transactionsByCurrencies.get(currency);
                if (transactionsForCurrency == null) {
                    transactionsForCurrency = new ArrayList<>();
                    transactionsByCurrencies.put(currency,transactionsForCurrency);
                }
                transactionsForCurrency.add(transaction);
            }
        }

        System.out.println(transactionsByCurrencies);
    }
}
