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

    public static boolean isNotNullAndNotEmpty(String value) {
        return value != null && !value.isEmpty();
    }

    public static Integer getStringAsPositiveInteger(String value, String name) {
        if (value != null && !value.isEmpty()) {
            ValidatorUtil.ensureInteger(value, name);
            ValidatorUtil.ensurePositiveInteger(Integer.parseInt(value), name);
            return Integer.parseInt(value);
        } else {
            return null;
        }
    }

    public static Double getStringAsPositiveDouble(String value, String name) {
        if (value != null && !value.isEmpty()) {
            ValidatorUtil.ensureDouble(value, name);
            ValidatorUtil.ensurePositiveDouble(Double.parseDouble(value), name);
            return Double.parseDouble(value);
        } else {
            return null;
        }
    }
}
