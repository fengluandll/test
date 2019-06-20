package interceptor;

import interceptor.test.AccountManagement;

import javax.enterprise.inject.se.SeContainerInitializer;

public class InterceptorTest {
    public static void main(String[] args) {
        SeContainerInitializer initializer =
                SeContainerInitializer.newInstance();
        initializer
                .initialize()
                .select(AccountManagement.class)
                .get().createAccount();
    }
}
