package c03;

import rx.Observable;

import java.util.ArrayList;
import java.util.List;

public class Collect2List {
    public static void main(String[] args) {
        Observable<List<Integer>> all = Observable
                .range(10, 20)
                .collect(ArrayList::new, List::add);
        all.subscribe(System.out::println);
    }
}
