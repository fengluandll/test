package lab1;

import java.util.Arrays;
import java.util.Scanner;

/**lab1.NameSorter class takes n number of names in the form of string inputs
 * from the user. It then asks user for which name to search for. 
 * It sorts the names entered by the user, and then prints the 
 * position of the search-name in the sorted list of the names, 
 * if it is found.
 */

public class NameSorter {
	Scanner input = new Scanner(System.in);
	
	/**getNameInputs takes an int parameter n and creates an array of size n. 
	 * It then asks user to Enter n names that get stored in the array. 
	 * It uses the helper method toTitleCase() to convert all names to Title case. 
	 * It returns the array filled with names entered by the user.
	 */
	String[] getNameInputs(int n) {
		if (n <= 0) {
			System.out.println("The number of names shall be positive");
			System.exit(-1);
		}
		String [] result = new String[n];
		for (int i = 1; i <= n; i++) {
			System.out.println("Enter name " + i);
			result[i-1] = input.next();
		}
		return result;
	}
	
	/**toTitleCase() takes one string argument as name and returns the string in title case. 
	 * If the name is null or the string is empty, it returns null.
	 */
	String toTitleCase(String name) {
		if (name == null || name.length() == 0) {
			return null;
		} else {
			final StringBuffer sb = new StringBuffer();
			for (int i = 0; i < name.length(); i++) {
				if (i == 0) {
					sb.append(Character.toUpperCase(name.charAt(i)));
				} else {
					sb.append(Character.toLowerCase(name.charAt(i)));
				}
			}
			return sb.toString();
		}
	}

	/**sortAndSearch() takes two arguments. The first is an array of strings and the second
	 * is a searchString. The method first sorts the array in increasing alphabetical order, 
	 * and prints it in that order.
	 * It then searches for the searchString in a case-insensitive way. If the searchString is found,
	 * it returns the position of the searchString according to the sorted list. 
	 * If it is not found, then it returns -1.
	 */
	int sortAndsearch(String[] strings, String searchString) {
		if (strings != null) {
			Arrays.sort(strings);

			// print names
			System.out.println("*** Names in sorted order ***");
			for (int i = 0; i < strings.length; i++) {
				System.out.println( (i + 1) + ". " + strings[i]);
			}

			for (int i = 0; i < strings.length; i++) {
				if (strings[i] != null && searchString != null && strings[i].equalsIgnoreCase(searchString)) {
					return i;
				}
			}
		}
		return -1;
	}

	/**DO NOT CHANGE THIS METHOD */
	public static void main(String[] args) {
		NameSorter ns = new NameSorter();
		System.out.println("*** How many names to store? ***");
		int n = ns.input.nextInt();
		if (n > 0) {
			String[] names = ns.getNameInputs(n);
			System.out.println("*** Enter the name to search ***");
			String name = ns.input.next();
			int position = ns.sortAndsearch(names, name);
			if (position >=0 ) System.out.println(name + " found at position " + (position+1));
			else System.out.println("Sorry! " + name + " not found!");
		} else System.out.println("Good Bye!");
	}
}
