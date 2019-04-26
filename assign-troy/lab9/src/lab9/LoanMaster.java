package lab9;

import java.io.*;
import java.util.*;

public class LoanMaster {

	Scanner fileScanner;   //to be attached to the input file
	List<LoanAccount> loanAccounts = new ArrayList<>();

	/**main method takes user input for filename,
	 * and passes it to readLoanFile().
	 * If readLoanFile() is able to open the file, it initializes
	 * fileScanner memberVariable. 
	 * Then loadFileData reads fileScanner
	 * and returns file content in a StringBuilder. 
	 * This StringBuilder is then passed to loadAccounts() method
	 * which loads loanAccounts arrayList.
	 * Finally writeProcessedLoanData() writes all loan data 
	 * from loanAccounts arrayList after first sorting the arrayList by principal amount
	 * It also writes the EMI for each account as its last field.  
	 */
	//DO NOT CHANGE THIS METHOD
	public static void main(String[] args) {
		LoanMaster fv = new LoanMaster();
		System.out.println("Enter file name");
		Scanner input = new Scanner(System.in);
		String filename = input.nextLine();
		if (fv.readLoanFile(filename)) {  //if able to read the file
			fv.loadAccountsList(fv.loadFileData());
			fv.writeProcessedLoanData();
			fv.printOutput();
			
		}
		input.close();
	}
	
	/**printOutput() prints console output using processed loan 
	 * data in loanAccounts arraylist.
	 */
	//DO NOT CHANGE THIS METHOD
	void printOutput() {
		int count=0;
		System.out.println("\n\t******** Processed Loans Report ********");
		System.out.printf("%3s. %s\t%s\t\t%s\t%s\t%s%n", "#", "Account", "Principle", "Interest", "Years", "EMI");
		System.out.println("--------------------------------------------------------------------------");
		for (LoanAccount l: loanAccounts) {
			System.out.printf("%3d. %s\t$%,15.2f\t%.4f%%\t%10d\t$%,10.2f%n", ++count, l.accountNumber, l.principle, l.interest*100, l.years, l.calculateEMI());
		}
	}

	/**readLoanFile() takes filename as input and initializes 
	 * fileScanner member variable by opening and attaching 
	 * the file to it. If successful, it returns true. If the file-open
	 * operation throws FileNotFoundException, it catches the exception and
	 * returns false. 
	 * @param filename
	 * @return
	 */
	boolean readLoanFile(String filename) {
		//write your code here
		try {
			fileScanner = new Scanner(new File(filename));
			// if file was opened successfully, return true
			return true;
		} catch (FileNotFoundException e) {
			System.out.println("Invalid file name");
			return false;
		}
	}

	/**loadFileData() parses the fileScanner to all data
	 * line by line and stores it in a StringBuilder, preserving
	 * the new line characters.
	 * It returns this StringBuilder.
	 * @return
	 */
	StringBuilder loadFileData() {
		//write your code here
		if (fileScanner != null) {
			StringBuilder stringBuilder = new StringBuilder();
			while (fileScanner.hasNextLine()) {
				String line = fileScanner.nextLine();
				stringBuilder.append(line);
				stringBuilder.append(System.lineSeparator());
			}
			return stringBuilder;
		}
		return null;
	}

	/**loanAccountsList() takes loanData in a StringBuilder
	 * and parses each line to read one loan-account at a time. 
	 * It splits each line on comma and then parses each value to extract
	 * accountNumber, principle, interest, and years for a loanAccount. 
	 * If successful, it creates a new LoanAccount object and initializes its instance-variables
	 * If any NumberFormatException is thrown while parsing data, 
	 * it is caught and a message 'Invalid data in account # xxx' is printed. 
	 * The method then moves on to read next record.
	 * @param loanData
	 */
	void loadAccountsList(StringBuilder loanData) {
		//write your code here
		// split String into lines by line separator
		String[] lines = loanData.toString().split(System.lineSeparator());

		int accountsWritten = 0; // how many accounts have been written
		for (String line : lines) {
			if (line != null) {
				String[] columns = line.split(",\\s*");
				if (columns.length >= 4) {
					String accountNumber = columns[0];
					try {
						double principle = Double.parseDouble(columns[1]);
						float interest = Float.parseFloat(columns[2]);
						int years = Integer.parseInt(columns[3]);
						LoanAccount loanAccount = new LoanAccount();
						loanAccount.accountNumber = accountNumber;
						loanAccount.principle = principle;
						loanAccount.interest = interest;
						loanAccount.years = years;
						loanAccounts.add(loanAccount);
						accountsWritten++;
					} catch (NumberFormatException e) {
						System.out.println("Invalid data in account # " + accountNumber);
					}
				}
			}
		}
		System.out.println(accountsWritten + " accounts read");
	}

	/**writeProcessedLoanData() sorts loanAccounts in increasing order of 
	 * their principle amount. It then prints data from each LoanAccount, including the EMI value 
	 * calculated by its calculateEMI() method into a file 
	 * named "ProcessedLoans.csv" in a comma-separate-value format
	 * After writing the data into the file, it then prints on console how many records were written
	 */
	void writeProcessedLoanData() {
		//write your code here
//		sorts loanAccounts in increasing order of their EMI
		Collections.sort(loanAccounts);

		try {
			FileWriter fileWriter = new FileWriter("ProcessedLoans.csv");
			BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
			for (LoanAccount loanAccount : loanAccounts) {
				String line = loanAccount.accountNumber
						+ ", " + loanAccount.principle
						+ ", " + loanAccount.interest
						+ ", " + loanAccount.years
						+ ", " + loanAccount.calculateEMI();
				bufferedWriter.write(line);
				bufferedWriter.newLine();
			}
			bufferedWriter.close();
			fileWriter.close();
			System.out.println(loanAccounts.size() + " accounts written");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
