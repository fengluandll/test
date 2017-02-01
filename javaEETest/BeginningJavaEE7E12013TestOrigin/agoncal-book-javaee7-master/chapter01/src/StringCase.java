/**
 * Created by YunZhang on 1/2/17.
 */
public class StringCase {
    public static void main(String[] args) {
        String action = "update";
        switch (action){
            case "create":
                System.out.println("create");
                break;
            default:
                    System.out.println("update");
        }
    }
}
