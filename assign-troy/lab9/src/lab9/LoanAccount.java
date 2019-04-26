package lab9;

public class LoanAccount {
	String accountNumber;
	double principle;
	float interest;
	int years;
	
	double calculateEMI() {
		return principle * (interest/12) *  Math.pow((1 + interest/12) , years*12) / (Math.pow((1 + interest/12) , years*12) - 1);
	}

}
