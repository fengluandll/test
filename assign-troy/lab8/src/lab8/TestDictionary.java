package lab8;

import static org.junit.Assert.*;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

public class TestDictionary {
	static Dictionary dictionary;
	@BeforeClass 
	public static void setupClass() {
		dictionary = new Dictionary();
		dictionary.loadWordList();
		dictionary.loadSingleMap();
		dictionary.loadMultiMap();
	}

	//test searchWordList() method
	@Test
	public void test1_searchWordListExistingWord() {
		assertEquals(2, dictionary.searchWordList("java").size());
	}
	@Test
	public void test2_searchWordListNonExistingWord() {
		assertEquals(0, dictionary.searchWordList("xyz").size());
	}

	//test singleMap data structure
	@Test
	@Ignore
	public void test3_SingleMapContainsKey() {
		assertEquals(true, dictionary.singleMap.containsKey("wise") );
	}
	@Test
	@Ignore
	public void test4_SingleMapMeaning() {
		assertEquals("(v.) Way of being or acting; manner; mode; fashion.", dictionary.singleMap.get("wise").meaning );
	}

	//test searchSingleMap() method
	@Test
	public void test5_searchSingleMapExistingWord() {
		String result = dictionary.searchSingleMap("java");
		assertEquals(false, (result == null || result.isEmpty()) );
	}
	@Test
	public void test6_searchSingleMapNonExistingWord() {
		assertEquals(null, dictionary.searchSingleMap("xyz") );
	}

//IF YOU DO NOT WANT TO ATTEMPT THE OPTIONAL BONUS PART 2, PLEASE COMMENT OUT THE FOLLOWING FOUR TEST CASES
	
	//test multiMap data structure
	@Test
	public void test7_MultiMapContainsKey() {
		assertEquals(true, dictionary.multiMap.containsKey("wise") );
	}
	@Test
	@Ignore
	public void test8_MultiMapMeaningSize() {
		assertEquals(6, dictionary.multiMap.get("wise").size() );
	}

	//test searchMultiMap() method
	@Test
	public void test9_searchMultiMapExistingKey() {
		assertEquals(2, dictionary.searchMultiMap("java").size() );
		
	}
	@Test
	public void test10_searchMultiMapNonExistingKey() {
		assertEquals(0, dictionary.searchMultiMap("xyz").size() );
	}
}
