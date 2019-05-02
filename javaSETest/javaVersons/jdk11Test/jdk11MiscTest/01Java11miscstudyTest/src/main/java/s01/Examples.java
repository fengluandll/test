package s01;

import java.util.List;
import java.util.stream.Collectors;

public class Examples {
    List<String> getUppercaseLines(String a) {
        return a.lines()
                .map(String::toUpperCase)
                .collect(Collectors.toList());
    }

}
