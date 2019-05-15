package c03;


import rx.Observable;

import java.util.ArrayList;
import java.util.List;

public class ReduceToList {
    public static void main(String[] args) {
        Observable<List<Integer>> all = Observable
                .range(10, 20)
                .reduce(new ArrayList<>(), (list, item) -> {
                    list.add(item);
                    return list;
                });
        all.subscribe(System.out::println);
    }
}


