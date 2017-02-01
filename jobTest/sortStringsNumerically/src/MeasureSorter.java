

import java.util.List;
import java.util.Objects;
import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Collectors;

public class MeasureSorter {

	public static void main(String[] args) {
		List<String> lengthStrList = Arrays.asList("1m","1.5m","10m","2m","2.5m","3m");
		List<String> result = new MeasureSorter().sortStringsNumerically(lengthStrList);
		System.out.println("sorted list");
		result.forEach(str -> System.out.println(str));
	}
	
	public List<String> sortStringsNumerically(List<String> input){
		//Use Streams API. First convert String stream to Measure Stream,
		//then sort by length, finally convert measure stream back to string stream
		return input.stream().map(str->new Measure(str))
		.sorted(Comparator.comparing(Measure::getLength))
		.map(measure -> measure.toString())
		.collect(Collectors.toList());
	}
	
	private class Measure {
		private double length;

		public Measure(String lengthStr) {
			super();
			Objects.requireNonNull(lengthStr, "lengthStr must not be null");
			length = Double.parseDouble(lengthStr.substring(0,lengthStr.length()-1));
		}
		
		public double getLength(){
			return length;
		}

		@Override
		public String toString() {
			return length + "m";
		}
		
	}

}
