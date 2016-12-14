package java7_test;

/**
 * Created by YunZhang on 13/12/16.
 */
public class StringEquality {
    public static void main(String[] args) {
        String str1 = "My String";
        String str2 = new String("My String");
        System.out.println(str1.equals(str2));
        System.out.println(str1.matches(str2));
        System.out.println(str1.hashCode() == str2.hashCode());
    }
}
