package interceptor.test;

import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;

@Audited (logToFile = true)
@Interceptor
public class AuditFileInterceptor {
    @AroundInvoke
    public Object auditMethod(InvocationContext ctx) throws Exception {
        final String methodName = ctx.getMethod().getName();
        System.out.println("file audit: " + methodName);
        return methodName + "ff";
    }
}
