package lab3;

public class CSVDoc extends Document {
    int columnCount = 0;
    int rowCount = 0;

    CSVDoc(String filename) {
        super(filename);
    }

    @Override
    void collectDocInfo() {
        // get the lines file fileContent
        if (fileContent != null) {
            String[] lines = fileContent.toString().split("\\s*\n");
            rowCount = lines.length;
            // get the column count
            if (lines.length > 0 && lines[0] != null) {
                String firstLine = lines[0];
                String[] columns = firstLine.split("\\s*,\\s*");
                columnCount = columns.length;
            }
        }
    }
}
