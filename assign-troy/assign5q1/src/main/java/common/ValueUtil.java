package common;

public class ValueUtil {
    public static String getIntegerAsString(Integer value) {
        return objectToString(value);
    }

    private static String objectToString(Object value) {
        if (value != null) {
            return value.toString();
        } else {
            return null;
        }
    }

    public static String getDoubleAsString(Double value) {
        return objectToString(value);
    }
}
