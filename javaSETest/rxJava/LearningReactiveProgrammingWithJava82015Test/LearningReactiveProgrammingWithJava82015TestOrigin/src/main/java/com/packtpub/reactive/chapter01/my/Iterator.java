package com.packtpub.reactive.chapter01.my;

import java.util.Arrays;
import java.util.List;

/**
 * Created by YunZhang on 1/2/17.
 */
public class Iterator {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("One","2","3","4","five");
        java.util.Iterator<String> iterator = list.iterator();
        while(iterator.hasNext()){
            System.out.println(iterator.next());
        }
    }
}
