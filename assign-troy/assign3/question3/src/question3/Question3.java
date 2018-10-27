package question3;

import java.util.Scanner;

public class Question3 {
	
	public static final String[] nums = { "ZERO", "ONE", "TWO", "THREE", "FOUR",
			"FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE",
			"THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN",
			"EIGHTEEN", "NINETEEN" };
	
	public static final String[] tens = { 
			"", 		// 0
			"",		// 1
			"TWENTY", 	// 2
			"THIRTY", 	// 3
			"FORTY", 	// 4
			"FIFTY", 	// 5
			"SIXTY", 	// 6
			"SEVENTY",	// 7
			"EIGHTY", 	// 8
			"NINETY" 	// 9
	};
	
	public static String num2ToWords(final double number) {
		int wholeNumber = (int)number;
		int fraction = (int)((number - wholeNumber) * 100);
		
		return int2Words(wholeNumber) + " and " + fraction + "/100";
	}
	
	private static String int2Words(final int intNum) {
		if (intNum > 1000) {
			return int2Words(intNum / 1000) + " THOUNDS " + int2Words(intNum % 1000);
		} else if (intNum > 100) {
			return int2Words(intNum / 100) + " HUNDREDS " + int2Words(intNum % 100);
		} else if (intNum >= 20) {
			return tens[intNum / 10] + ((intNum % 10 != 0) ? " " : "") + int2Words(intNum % 10);
		} else if (intNum >= 0) {
			return nums[intNum];
		}
		return "";
	}
	

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Please enter a dollar amount:");
		double number = scanner.nextDouble();
		System.out.println("Dollar amount in words: " + num2ToWords(number));
	}

}
