package generics;

import java.util.ArrayList;
import java.util.List;

public class GenericsAndCovariance {

	public static void main(String[] args) {
		List<? extends Fruit> flist = new ArrayList<Apple>();
//		flist.add(new Apple());
		flist.add(null); // Legal but uninteresting
		Fruit f = flist.get(0);

	}

}
