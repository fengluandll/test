package java8_test.ex2;

import java7_test.Expression;

class MyException extends RuntimeException{
    public MyException() {
    }

    public MyException(String message) {
        super(message);
    }
}
