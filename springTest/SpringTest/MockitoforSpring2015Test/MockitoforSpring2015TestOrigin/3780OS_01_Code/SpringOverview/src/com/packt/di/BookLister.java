package com.packt.di;

import java.util.ArrayList;
import java.util.List;

public class BookLister {

	private BookService bookFinder;
	
	public void setBookService(BookService bookFinder) {
		this.bookFinder = bookFinder;
	}

	public BookLister(){
		
	}
	public BookLister(BookService bookFinder) {
		this.bookFinder = bookFinder;
	}


	public List<Book> findByAuthor(String author){
		List<Book> books = new ArrayList<>();
		
		for(Book aBook:bookFinder.findAll()){
			for(String anAuthor:aBook.getAuthors()){
				if(anAuthor.equals(author)){
					books.add(aBook);
					break;
				}
			}
		}
		
		return books;
	}
	
}
