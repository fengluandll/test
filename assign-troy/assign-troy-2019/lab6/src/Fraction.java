import java.util.Scanner;

/** This class handles fractions. 
 * It adds fractions and reduces the result to its lowest 
 * numerator and denominator by finding their greatest common divisor.
 */

public class Fraction {
	int numerator;
	int denominator;
	
	/** Constructor to initialize numerator and denominator to 1 */
	Fraction() {	
		//write code here
		numerator = 1;
		denominator = 1;
	}
	
	/** Constructor to initialize numerator and denominator to n and d */
	Fraction(int n, int d) {		
		//write code here
		numerator = n;
		denominator = d;
	}
	
	/** findGCD() recursively returns reduced fraction 
	 * as per the algorithm given in the handout
	 */
	int findGCD(int a, int b) { 
		//write code here
		if (a == 0) {
			return 1;
		}
		if (b == 0) {
			return a;
		}

		return findGCD(b, a % b);
	}

	/**  toString() returns a string as n/d 
	 * where n and d are numerator and denominator respectively
	 */
	public String toString() {	
		//write code here 
		return numerator + "/" + denominator;
	}

	/** toDecimal() returns the decimal value of n/d 
	 * where n and d are numerator and denominator respectively
	 */
	double toDecimal() {	
		//write code here 
		return (double)numerator / denominator;
	}

	/** add() adds two fractions using the formula 
	 * sumFraction = (n1*d2 + n2*d1)/d1*d2
	 * where two fractions being added are n1/d1 and n2/d2.
	 * It reduces sumFraction using findGCD() and  returns reduced fraction.
	 * Note that it takes only one fraction as a parameter. 
	 * It uses 'this' as the second fraction.
	 */
	Fraction add(Fraction f) {
		//write code here
		int sumNumerator = this.numerator * f.denominator + this.denominator * f.numerator;
		int sumDenominator = this.denominator * f.denominator;
		int gcd = findGCD(sumNumerator, sumDenominator);
		return new Fraction(sumNumerator / gcd, sumDenominator / gcd);
	}
	
	
	//**** do not change anything in the main method ****
	public static void main(String[] args) {	
		Scanner input = new Scanner (System.in);
		System.out.println("********** Input first fraction *********");
		System.out.println("Numerator: ");
		int n1 = input.nextInt();
		System.out.println("Denominator: ");
		int d1 = input.nextInt();
		
		System.out.println("********** Input second fraction *********");
		System.out.println("Numerator: ");
		int n2 = input.nextInt();
		System.out.println("Denominator: ");
		int d2 = input.nextInt();
		
		Fraction f1 = new Fraction(n1, d1);
		Fraction f2 = new Fraction(n2, d2);

		System.out.println("f1 = " + f1);
		System.out.println("f2 = " + f2);
		
		Fraction f3 = f1.add(f2);
		System.out.println("f1 + f2 = " +     f1.add(f2) );
		System.out.println("The sum in decimal is: " + f3.toDecimal());
		input.close();
	}
}

