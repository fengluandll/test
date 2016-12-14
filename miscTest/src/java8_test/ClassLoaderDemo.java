package java8_test;

/**
 * Created by YunZhang on 14/9/15.
 */
public class ClassLoaderDemo {
    public static void main(String[] args) {
        try {
            Class c = Class.forName("java8_test.ClassLoaderDemo",true,ClassLoaderDemo.class.getClassLoader().getParent());
            System.out.println(c.getSimpleName());
        } catch (ClassNotFoundException e) {

        }
    }
}
