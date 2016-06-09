package com.packtpub.mongo.chapter6.repository;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
import java.util.List;
import
        org.springframework.data.mongodb.repository.MongoRepository;
public interface BookRepository2 extends MongoRepository<Book, String>{
    public Book findByTitle(String title);
    public List<Book> findByType(String type);
    public List<Book> findByAuthor(String author);
}
