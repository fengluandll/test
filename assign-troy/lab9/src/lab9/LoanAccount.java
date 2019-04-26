package lab9;

public class LoanAccount implements Comparable<LoanAccount> {
	String accountNumber;
	double principle;
	float interest;
	int years;
	
	double calculateEMI() {
		return principle * (interest/12) *  Math.pow((1 + interest/12) , years*12) / (Math.pow((1 + interest/12) , years*12) - 1);
	}

	@Override
	public int compareTo(LoanAccount loanAccount) {
		return Double.compare(calculateEMI(), loanAccount.calculateEMI());
	}
}
