class Shape{}
class Qua extends Shape{}
class Tri extends Shape{}

public class ClassExt {

    public static void main(String[] args) {
       Shape shape = new Qua();
       Qua qua = new Qua();
//       Tri tri = (Tri)shape;
       shape = qua;
    }
}
