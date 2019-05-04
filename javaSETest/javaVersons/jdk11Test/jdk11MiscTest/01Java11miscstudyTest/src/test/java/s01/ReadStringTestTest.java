package s01;

import org.junit.jupiter.api.Test;

import java.nio.file.Path;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class ReadStringTestTest {

    @Test
    void clazzPath2Path() {
        final Path path = ReadStringTest.clazzPath2Path("s01/student.txt");
        assertThat(path)
                .isNotNull();
        assert path.toFile().exists();

        assertThat(path.toFile().getName())
                .isNotNull()
                .isEqualTo("student.txt");
    }
}