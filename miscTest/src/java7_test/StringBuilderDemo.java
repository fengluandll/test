package java7_test;

import java.util.Scanner;

/**
 * Created by YunZhang on 13/12/16.
 */
public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder str = new StringBuilder();
        for(String arg: args){
            if (str.indexOf(arg) < 1){
                str.append(arg + " ");
            }
        }

        System.out.println(str.toString());
        Scanner sc = new Scanner(str.toString());
        while(sc.hasNext()){
            if(sc.hasNextInt())
                System.out.print(sc.nextInt() + " ");
            else
                sc.next();
        }
    }
}
