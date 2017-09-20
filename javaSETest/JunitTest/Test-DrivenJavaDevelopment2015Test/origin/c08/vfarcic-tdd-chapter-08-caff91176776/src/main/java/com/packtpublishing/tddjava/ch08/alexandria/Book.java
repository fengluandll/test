package com.packtpublishing.tddjava.ch08.alexandria;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Book {

    private final String title;
    private final String author;
    private int status;
    private int id;


    public Book(String title, String author, int status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }

    public String getTitle() {
        return title;
    }

    public int getStatus() {
        return status;
    }

    public String getAuthor() {
        return author;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void rent() {
        status = States.RENTED;
    }

    public void returnBook() {
        status = States.AVAILABLE;
    }

    public void censor() {
        status = States.CENSORED;
    }

    public void uncensor() {
        status = States.AVAILABLE;
    }

    public void prepare() {
        status = States.AVAILABLE;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Book book = (Book) o;

        if (id != book.id) return false;
        if (status != book.status) return false;
        if (!author.equals(book.author)) return false;
        if (!title.equals(book.title)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = title.hashCode();
        result = 31 * result + author.hashCode();
        result = 31 * result + status;
        result = 31 * result + id;
        return result;
    }
}
