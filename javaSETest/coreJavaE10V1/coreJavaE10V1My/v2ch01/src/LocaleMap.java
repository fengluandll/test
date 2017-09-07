import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LocaleMap {
    public static void main(String[] args) {
        Stream<Locale> locales = Stream.of(Locale.getAvailableLocales());
        Map<String,List<Locale>> countryToLocales = locales.collect(Collectors.groupingBy(Locale::getCountry));
    }
}
