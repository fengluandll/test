package com.packtpub.mongo.chapter6.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public interface BookRepository3 extends MongoRepository<Book,
        String> {
    @Query("{ 'type' : ?0 }")
    public List<Book> findByBookType(String type);
    @Query("{ 'type' : {$ne : ?0} }")
    public List<Book> findByBookTypeNot(String type);
}
