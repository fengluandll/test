package com.packtpub.reactive.my.c02;

import java.util.function.Function;

public class HighSum {
    public static <T,R> int highSum(
            Function<T, Integer> f1,
            Function<T, Integer> f2,
            T data1,
            T data2
    ){
        return f1.apply(data1) + f2.apply(data2);
    }

    public static void main(String[] args) {
        System.out.println(highSum(v -> v * v, v -> v * v * v, 3 , 2 ));

        Function<String, Integer> strToInt = s -> Integer.parseInt(s);
        System.out.println(highSum(strToInt, strToInt, "4", "5"));
    }
}
