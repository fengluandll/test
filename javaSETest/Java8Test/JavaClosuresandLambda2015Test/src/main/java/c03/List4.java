package c03;

import java.util.Objects;
import java.util.function.Function;
import java.util.function.Predicate;

public class List4 extends Library {
    public static <T,U> Predicate<T> mapThenTest(Function<T, U> map, Predicate<U> test) {
        Objects.requireNonNull(map, "the map implementation");
        Objects.requireNonNull(test, "the test implementation");
        return t -> test.test(map.apply(t));
    }

    public void removeGenre(Book.Genre genre) {
        Objects.requireNonNull(genre, "the genre to compare against");
        Predicate<Book> hasGenre = mapThenTest(Book::getGenre, Book.Genre::equals);

    }
}
