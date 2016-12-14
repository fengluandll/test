package java7_test.override;

/**
 * Created by YunZhang on 13/12/16.
 */

interface MyInterface{
    void method1();
    void method2();
}

abstract class Parent implements MyInterface{
//    abstract void method1();
}

public abstract class Child extends Parent implements MyInterface{
    @Override
    public void method1() {

    }

    @Override
    public abstract void method2();
}
