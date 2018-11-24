package common;

import model.common.ValidationException;

public class ValidatorUtil {

    public static void ensureNotEmpty(String value, String name) {
        if (value.isEmpty()) {
            throw new ValidationException(name + " must not be empty");
        } 
    }

    public static void ensureInteger(String value, String name) {
        try {
            Integer.parseInt(value);
        } catch (NumberFormatException e) {
            throw new ValidationException(name + " must be an integer");
        }
    }

    public static void ensurePositiveInteger(int value, String name) {
        if (value <= 0) {
            throw new ValidationException(name + " must be greater than 0");
        }
    }

    public static void ensureDouble(String value, String name) {
        try {
            Double.parseDouble(value);
        } catch (NumberFormatException e) {
            throw new ValidationException(name + " must be a double value");
        }
    }

    public static void ensurePositiveDouble(double value, String name) {
        if (value <= 0) {
            throw new ValidationException(name + " must be greater than 0");
        }
    }
}
