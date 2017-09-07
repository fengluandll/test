public class ArrayAlg {
    public static <T> T getMiddle(T... a){
        return a[a.length / 2];
    }

    public static void main(String[] args) {
        String middle = ArrayAlg.<String>getMiddle("John","Q.","Public");
        System.out.println(middle);

        middle = ArrayAlg.getMiddle("John","Q.","Public");
        System.out.println(middle);

        //double m = ArrayAlg.getMiddle(3.14,17,0);
    }
}
