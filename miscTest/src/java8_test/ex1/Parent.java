package java8_test.ex1;

/**
 * Created by YunZhang on 14/9/15.
 */
public class Parent {
    protected static int count = 0;
    public Parent(){
        count++;
    }

    static int getCount(){return count;}
}
