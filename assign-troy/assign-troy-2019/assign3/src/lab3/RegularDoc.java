package lab3;

public class RegularDoc extends Document {
    int wordCount = 0;

    RegularDoc(String filename) {
        super(filename);
    }

    @Override
    void collectDocInfo() {
        if (fileContent != null) {
            String[] words = fileContent.toString().split("\\s+");
            wordCount = words.length;
        }
    }
}
