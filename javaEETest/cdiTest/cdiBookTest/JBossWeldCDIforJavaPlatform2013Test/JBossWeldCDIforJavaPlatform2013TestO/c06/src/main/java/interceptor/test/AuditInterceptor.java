package interceptor.test;

import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;

@Audited
@Interceptor
public class AuditInterceptor {
    @AroundInvoke
    public Object auditMethod(InvocationContext ctx) {
        final String methodName = ctx.getMethod().getName();
        System.out.println("audit: " + methodName);
        return methodName + "ff";
    }
}
