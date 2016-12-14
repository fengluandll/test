package java7_test;

/**
 * Created by YunZhang on 13/12/16.
 */

class Parent{
    protected static int count = 0;
    public Parent(){count++;}
    static int getCount(){return count;}
}

public class Child extends Parent{
    public static void main(String[] args) {
        System.out.println("Count = " + getCount());
        Child obj = new Child();
        System.out.println("Count = " + getCount());
    }
}
