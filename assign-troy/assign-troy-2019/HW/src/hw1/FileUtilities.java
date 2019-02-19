package hw1;

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
		return null;				
	}
	
	/** wordCount method receives text content in a StringBuilder object and 
	 * returns its word count. It considers white-space as a word-delimiter.  
	 */
	int countWords(StringBuilder fileContent) {
		//write your code here
		return 0;
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
		//write your code here
		return null;
	}


	/** replace method receives text content in a StringBuilder object, and 
	 * replaces all occurrences of oldString with new String.
	 * It returns the number of replacements done.
	 * If oldString is not found, it means that no replacement happens. In such a case, it returns 0.
	 */
	int replace(StringBuilder fileContent, String oldString, String newString) {
		//write your code here
		return 0;
	}
}
