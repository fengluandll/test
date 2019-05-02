package s01;

import org.junit.jupiter.api.Test;

import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.Stream;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class ExamplesTestTest {

    @Test
    void getUppercaseLines() {
        var lines = new Examples()
                .getUppercaseLines("a\nb");

        assertThat(lines)
                .isNotNull()
                .containsExactly("A", "B");

        lines = new Examples()
                .getUppercaseLines("a\r\nc");
        assertThat(lines)
                .isNotNull()
                .hasSize(2)
                .containsExactly("A", "C");
    }

    @Test
    void optional_empty_test() {
        assertThat(Optional.empty().isEmpty())
                .isTrue();
    }

    @Test
    void match_predicate_test() {
        final String EMAIL_PATTERN = "^[a-zA-Z0-9#_~!$&'()*+,;=:.\"<>@\\[\\]\\\\]+@[a-zA-Z0-9-]+(" +
                "\\.[a-zA-Z0-9-]+)*$";

        var pattern = Pattern.compile(EMAIL_PATTERN).asMatchPredicate();
        var stream = Stream.of("jondoe@gmail.com")
                .filter(pattern);
        assertThat(stream)
                .asList()
                .containsExactly("jondoe@gmail.com");

    }
}