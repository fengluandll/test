package com.sample;

/**
 * Created by YunZhang on 13/12/16.
 */
public class MyClass  implements Cloneable{
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public String getInfo(){
        return "MyClass";
    }

    public static void main(String[] args) {
        try {
            MyClass myClass = (MyClass) MyClass.class.getClassLoader().loadClass("com.sample.MyClass").newInstance();
//            Class class =
            myClass.getInfo();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
