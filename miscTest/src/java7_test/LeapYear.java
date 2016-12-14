package java7_test;

import java.util.Calendar;
import java.util.GregorianCalendar;

/**
 * Created by YunZhang on 13/12/16.
 */
public class LeapYear {
    public static void main(String[] args) {
        System.out.println(new LeapYear().isLeapYear3(2000));
    }

    public boolean isLeapYear(int year){
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR,year);
        int days = calendar.getActualMaximum(Calendar.DAY_OF_YEAR);
        return days > 365;
    }

    public boolean isLeapYear2(int year){
        GregorianCalendar gc = new GregorianCalendar();
        return gc.isLeapYear(year);
    }

    public boolean isLeapYear3(int year){
        Calendar cal = Calendar.getInstance();
        cal.set(year,1,1);
        int days = cal.getMaximum(Calendar.DAY_OF_MONTH);
        System.out.println(days);
        return (days == 29);
    }
}
