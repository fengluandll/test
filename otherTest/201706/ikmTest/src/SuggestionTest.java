class SuggestionBox{
    private void onSelection(){
        System.out.println("item selected");
    }

    public void onRemoveSelection(){
        System.out.println("item removed");
    }
}

public class SuggestionTest {

    public static void main(String[] args) {
        SuggestionBox officeSuggestionBox = new SuggestionBox(){
            public void onSelection(){
                System.out.println("office selected");
            }
            @Override
            public void onRemoveSelection() {
                onSelection();
                System.out.println("Office removed");
            }
        };

        officeSuggestionBox.onRemoveSelection();
    }
}
