package com.groovybook;

/**
 * Created by YunZhang on 30/4/17.
 */
public class MyJavaClass {
    public static void main(String[] args) {
        MyGroovyClass mgc = new MyGroovyClass();
        mgc.setAge(11);
        System.out.println("the age is " + mgc.getAge());
    }
}
