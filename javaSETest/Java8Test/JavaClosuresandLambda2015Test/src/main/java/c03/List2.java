package c03;

public class List2 {
    public static void main(String[] args) {
        Library library = Library.createSampleLibrary();
//        for (Book book: library.getBooks()) {
//            System.out.println(book);
//        }

//        library.getBooks().forEach(System.out::println);

        library.getFeaturedBooks().forEach((book, msg) -> System.out.println(book + ": " + msg));
    }
}
