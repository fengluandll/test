public class LongTest {

    public static void main(String[] args) {
        Long i = new Long(10);
        long j = 10;
        long k = -5;
        if (i.equals(j))
            System.out.println("i = j");

        if (Long.compareUnsigned(i,k)>0){
            System.out.println(">");
        }
    }
}
