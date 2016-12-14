package java7_test.override;

/**
 * Created by YunZhang on 13/12/16.
 */
public class ChildClass extends SuperClass {
    @Override
    protected int getLocaleCode(String value, boolean isValidated) {
        return -2;
    }
}
