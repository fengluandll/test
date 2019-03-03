package lab3;

import java.util.Scanner;

public class DocAnalyst {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter file name");
        String fileName = scanner.nextLine();
        if (fileName == null || fileName.length() == 0) {
            System.out.println("file name cannot be empty");
        } else if (fileName.endsWith(".csv")) {
            CSVDoc csvDoc = new CSVDoc(fileName);
            csvDoc.readFile();
            csvDoc.collectDocInfo();
            String message = fileName + " has " + csvDoc.rowCount + " rows and " + csvDoc.columnCount + " columns";
            System.out.println(message);
        } else {
            RegularDoc regularDoc = new RegularDoc(fileName);
            regularDoc.readFile();
            regularDoc.collectDocInfo();
            System.out.println("This file has " + regularDoc.wordCount + " words");
        }
        scanner.close();
    }
}
