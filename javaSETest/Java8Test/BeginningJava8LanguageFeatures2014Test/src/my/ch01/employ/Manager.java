package my.ch01.employ;

/**
 * Created by YunZhang on 14/12/16.
 */
public class Manager extends Employee {
    // Override setSalary() in the Employee class

//    public void setSalary(int salary) {
//        System.out.println("Manager.setSalary(): " + salary);
//    }

    @Override
    public void setSalary(double salary) {
        System.out.println("Manager.setSalary(): " + salary);
    }

    public static void main(String[] args) {
        Employee ken = new Manager();
        int salary = 200;
        ken.setSalary(salary);
    }
}