import abc.ParamExample;

public class A {

    private int aa;

    public static String test(String a, String b) throws Exception {
        return test(new ParamExample(a, b, "ddd"));
    }

    public static String test(ParamExample paramExample) throws Exception {
        return paramExample.getDdd();
    }

    public int getAa() {
        return aa;
    }

    public void setAa(int aa) {
        this.aa = aa;
    }
}
