package lab4;

/** This is a dinner simulation program to illustrate several OO concepts
 * such as abstract classes, interfaces, static variables, static final constants, and polymorphism.
 * The Dinner class starts the program.
 * */


public class Dinner {
	
	/** main method prints the menu and takes user input in the variable 'choice'.
	 * It then invokes the getFood() method and passes the choice to it.
	 * After getFood() method returns the appropriate Food object, the main method  
	 * invokes the eatFood() method and passes that Food object to it. 
	 * It then prints how many calories have been consumed.
	 * The above is repeated in a loop till the user enters 'n' to the 
	 * question, 'Want some more?'
	 */
	public static void main(String[] args) {
		Dinner dinner = new Dinner();
		int choice = 0;
		// enter your code here
	}

	/**getFood() takes choice and returns Pizza object, Chips object, or IceCream object
	 * for choices 1, 2, and 3 respectively.  
	 */
	public Food getFood(int choice) {
		if (choice == 1) {
			return new Pizza();
		} else if (choice == 2) {
			return new Chips();
		} else if (choice== 3) {
			return new IceCream();
		}
		return null;
	}
	
	/**eatFood() method takes Food object as an argument. 
	 * It checks if the object is Pizza. If yes, then 
	 * it invokes its heatIt() method
	 * Then it invokes the eat() method of the Food object. 
	 */
	
	public void eatFood(Food f) {
		// the type of f is Pizza, cast f into Pizza type
		if (f instanceof Pizza) {
			Pizza pizza = (Pizza)f;
			pizza.heatIt();
		}
		System.out.println(f.eat());
	}
}
