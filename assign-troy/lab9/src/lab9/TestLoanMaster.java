package lab9;

import static org.junit.Assert.*;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import org.junit.Test;

public class TestLoanMaster {

	LoanMaster loanMaster = new LoanMaster();

	@Test
	public void test1_readExistingFile() {
		assertEquals(true, loanMaster.readLoanFile("LoanRegister.csv"));
	}

	@Test
	public void test2_readNonExistingFile() {
		assertEquals(false, loanMaster.readLoanFile("abc.csv"));
	}

	@Test
	public void test3_loadAccounts() {
		loanMaster.readLoanFile("LoanRegister.csv");
		loanMaster.loadAccountsList(loanMaster.loadFileData());
		assertEquals(6, loanMaster.loanAccounts.size());
	}

	@Test
	public void test4_writeFileCount() {
		if (loanMaster.readLoanFile("LoanRegister.csv")) {
			loanMaster.loadAccountsList(loanMaster.loadFileData());
			loanMaster.writeProcessedLoanData();
			StringBuilder processedData = new StringBuilder();
			try {
				Scanner input = new Scanner(new File("ProcessedLoans.csv"));
				while (input.hasNextLine()) {
					processedData.append(input.nextLine() + "\n");
				}
				assertEquals(6, processedData.toString().split("\n").length);
				assertEquals(5, processedData.toString().split("\n")[0].split(",").length);
				input.close();
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
			
		}
	}
	
	@Test
	public void test5_writeFileOrder() {
		if (loanMaster.readLoanFile("LoanRegister.csv")) {
			loanMaster.loadAccountsList(loanMaster.loadFileData());
			loanMaster.writeProcessedLoanData();
			StringBuilder processedData = new StringBuilder();
			try {
				Scanner input = new Scanner(new File("ProcessedLoans.csv"));
				while (input.hasNextLine()) {
					processedData.append(input.nextLine() + "\n");
				}
				assertEquals("111000225", processedData.toString().split("\n")[0].split(",")[0].trim());
				input.close();
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
		}
	}
}
