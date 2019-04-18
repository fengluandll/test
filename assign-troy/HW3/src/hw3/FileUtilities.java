package hw3;

import java.io.*;
import java.util.HashSet;
import java.util.Set;

/** FileUtilities class provides some basic tools to read a file, count words, search and replace strings.
 */
public class FileUtilities {

	/**readFile() method takes filename as a string parameter. 
	 * It opens the file which is assumed to be residing in the project folder.
	 * It reads the file's each line into a StringBuilder. While reading, 
	 * it preserves the line breaks. It then returns the StringBuilder.
	 */
	public StringBuilder readFile(String filename)  {
		//write your code here
		try {
			BufferedReader bufferedReader = new BufferedReader(new FileReader(filename));
			StringBuilder stringBuilder = new StringBuilder();
			String line = bufferedReader.readLine();
			while (line != null) {
				stringBuilder.append(line + '\n');
				line = bufferedReader.readLine();
			}
			return stringBuilder;
		} catch (FileNotFoundException e) {
			System.out.println("File is not found");
			return null;
		} catch (IOException e) {
			System.out.println("File cannot be read");
			return null;
		}
	}
	
	/** wordCount method receives text content in a StringBuilder object and 
	 * returns its word count. It considers white-space as a word-delimiter.  
	 */
	int countWords(StringBuilder fileContent) {
		if (fileContent == null || fileContent.length() == 0) {
			return 0;
		} else {
			// use a sequence of at least 1 character which is not either alphabets, numbers or quotes to split words
			return fileContent.toString().split("[^a-zA-Z0-9']+").length;
		}
	}
	
	/**searchAll() method receives text content in a StringBuilder and 
	 * returns all the char-positions at which searchString is found.
	 * These positions are counted from the beginning of the file starting with 0.
	 * For example, if the fileContent has: "What a wonderful world", 
	 * the searchString 'wonder' is at char-position 7. 
	 * The search is case-sensitive. 
	 * If the searchString is not found, it returns null. 
	 * Hints: 
	 * 1. You may find String methods indexOf() and substring() useful. 
	 * 2. You may have to traverse the fileContent twice. Once to count the number of times 
	 * the searchString is found, and second time to store its positions. 
	 */
	int[] searchAll(StringBuilder fileContent, String searchString) {

		// find how many times searchString is found in fileContent
		int matches = countMatchNumber(fileContent, searchString);

		// if there is not matches, return null
		if (matches == 0) {
			return null;
		} else {
			int foundIndex;  // position of a match, it is -1 if is not found
			int matchNumbers = 0;  // how matches are found
			int result[] = new int[matches]; // the positions
			int startIndex = 0; // from which index to begin searching

			while (true) {
				foundIndex = fileContent.indexOf(searchString, startIndex);
				if (foundIndex != -1) {
					matchNumbers++;
					result[matchNumbers - 1] = foundIndex;  // store the index where the searchString is found
					startIndex = foundIndex + searchString.length();  // move the index to begin next search
				} else {
					return result;
				}
			}
		}
	}

	/**
	 * return how many times searchString is found in fileContent
	 * @param fileContent file content
	 * @param searchString search string
	 * @return
	 */
	private int countMatchNumber(StringBuilder fileContent, String searchString) {

		if (fileContent == null || searchString == null) {
			return 0;
		}

		int foundIndex;  // position of a match, it is -1 if is not found
		int matchNumbers = 0;
		int startIndex = 0;
		while (true) {
			foundIndex = fileContent.indexOf(searchString, startIndex);
			if (foundIndex != -1) {
				matchNumbers++; // increase the match number by 1
				startIndex = foundIndex + searchString.length();  // move the index to begin next search
			} else {
				return matchNumbers;
			}
		}
	}


	/** replace method receives text content in a StringBuilder object, and 
	 * replaces all occurrences of oldString with new String.
	 * It returns the number of replacements done.
	 * If oldString is not found, it means that no replacement happens. In such a case, it returns 0.
	 */
	int replace(StringBuilder fileContent, String oldString, String newString) {

		if (newString == null) {
			return 0;
		}

		int[] foundIndexes = searchAll(fileContent, oldString);
		int replaceNumber = 0; // how many times the strings are replaced
		if (foundIndexes != null) {
			// from the end to begin to replace the strings;
			for (int i = foundIndexes.length - 1; i >= 0; i--) {
				int foundIndex = foundIndexes[i];
				fileContent.replace(foundIndex, foundIndex + oldString.length(), newString);
				replaceNumber++; // increment replaceNumber by 1 each time a string is replaced
			}
		}
		return replaceNumber;
	}

	/**
	 * count how many unique words in fileOneContent
	 * @param fileOneContent
	 * @return
	 */
	public int countUniqueWords(StringBuilder fileOneContent) {
		String[] strs = fileOneContent.toString().split("[^a-zA-Z0-9']+");
		Set<String> stringSet = new HashSet<>();
		for (String str : strs) {
			if (str != null && str.length() != 0) {
				// word is case-sensitive, so convert string to lower case
				stringSet.add(str.toLowerCase());
			}
		}
		return stringSet.size();
	}

	public String writeFile(String fileName, String fileContent) {
		try {
			BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(fileName));
			bufferedWriter.write(fileContent);
			return "File saved";
		} catch (IOException e) {
			e.printStackTrace();
			return "Could not save file";
		}
	}
}
