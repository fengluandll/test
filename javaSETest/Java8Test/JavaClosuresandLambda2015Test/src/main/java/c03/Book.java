package c03;

import java.util.Objects;

public class Book {
    public enum Genre {
        HORROR, COMEDY, TECHNICAL
    }

    private final String title;
    private final String author;
    private final Genre genre;

    /**
     *
     * @param title cannot be {@code null}
     * @param author
     * @param genre
     */
    public Book(String title, String author, Genre genre) {
        Objects.requireNonNull(title, "title of the book");
        this.title = title;
        Objects.requireNonNull(author, "author of the book");
        this.author = author;
        Objects.requireNonNull(author, "author of the book");
        this.genre = genre;
    }

    /**
     * Proivdes the title of the book.
     *
     * @return The title; never {@code null}
     */
    public String getTitle() {
        return title;
    }

    /**
     * Provides the author of the book.
     *
     * @return The author; never {@code null}
     */
    public String getAuthor() {
        return author;
    }

    /**
     * Provides the genre of the book.
     *
     * @return The genre; never {@code null}
     */
    public Genre getGenre() {
        return genre;
    }

    public String toString() {
        return "\"" + title + "\" by " + author + " (" + genre.toString().toLowerCase() + ")";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return Objects.equals(title, book.title) &&
                Objects.equals(author, book.author) &&
                genre == book.genre;
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, author, genre);
    }
}
