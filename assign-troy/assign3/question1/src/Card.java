import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Card {
    private char cardNumber;
    private boolean faceUp = false;

    public Card(char cardNumber) {
        this.cardNumber = cardNumber;
    }

    public void setFaceUp(boolean faceUp) {
        this.faceUp = faceUp;
    }

    public char getCardNumber() {
        return cardNumber;
    }

    public boolean isFaceUp() {
        return faceUp;
    }

    @Override
    public String toString() {
        if (faceUp) {
            return String.valueOf(cardNumber);
        } else {
            return "$";
        }
    }

    public static void main(String[] args) {

        int faceUps = 0;

        final List<Card> cardList = Arrays.asList('A', 'A', 'Q', 'Q', 'K', 'K', 'J', 'J', '2', '2', '5', '5', '6', '6', '9', '9')
                .stream()
                .map(Card::new)
                .collect(Collectors.toList());
        Collections.shuffle(cardList);

        // convert the list to 2-dimensional array
        Card[][] cards = list2Array(cardList);
        printCards(cards);

        Scanner scanner = new Scanner(System.in);
        do {

            String line = null;
            System.out.println("Please enter the row number of the first card (1-4)");
            int firstRowNo = scanner.nextInt();
            System.out.println("Please enter the column number of the first card (1-4)");
            int firstColNo = scanner.nextInt();

            System.out.println("Please enter the row number of the second card (1-4)");
            int secondRowNo = scanner.nextInt();
            System.out.println("Please enter the column number of the second card (1-4)");
            int secondColNo = scanner.nextInt();

            if (firstRowNo >= 1 && firstRowNo <= 4
                    && firstColNo >= 1 && firstColNo <= 4
                    && secondRowNo >= 1 && secondRowNo <= 4
                    && secondColNo >= 1 && secondColNo <= 4) {

                if (firstRowNo == secondRowNo && firstColNo == secondColNo) {
                    System.out.println("You cannot choose the same card");
                    continue;
                }


                final Card firstCard = cards[firstRowNo - 1][firstColNo - 1];
                final Card secondCard = cards[secondRowNo - 1][secondColNo - 1];

                // report the error if the user choose the shown cards
                if (firstCard.isFaceUp() || secondCard.isFaceUp()) {
                    System.out.println("You cannot choose the face-up cards");
                    continue;
                }

                // show the chosen card temporarily
                firstCard.setFaceUp(true);
                secondCard.setFaceUp(true);
                System.out.println("The cards after you chose a pair of cards");
                printCards(cards);
                firstCard.setFaceUp(false);
                secondCard.setFaceUp(false);
                // print newlines to hide the cards temporarily placed face-up
                for (int i = 0; i < 20; i++) {
                    System.out.println();
                }

                if (firstCard.getCardNumber() == secondCard.getCardNumber()) {
                    firstCard.setFaceUp(true);
                    secondCard.setFaceUp(true);
                    faceUps += 2;

                    System.out.println("You chose the right pair");
                    printCards(cards);
                } else {
                    System.out.println("You chose the wrong pair");
                    printCards(cards);
                }
            } else {
                System.err.println("row or col number must be between 1 and 4");
                continue;
            }

        } while (faceUps < 16);
    }

    private static void printCards(Card[][] cards) {
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                System.out.print(cards[i][j] + " ");
            }
            System.out.println();
        }
    }

    private static Card[][] list2Array(List<Card> cardList) {
        Card[][] cards = new Card[4][4];
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                cards[i][j] = cardList.get(i * 4 + j);
            }
        }
        return cards;
    }
}
