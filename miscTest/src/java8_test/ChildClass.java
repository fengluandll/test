package java8_test;

/**
 * Created by YunZhang on 14/9/15.
 */
public class ChildClass extends SuperClass {
    @Override
    public Integer getLocalCode(String value, boolean isValidated) {
        return -1;
    }
}
