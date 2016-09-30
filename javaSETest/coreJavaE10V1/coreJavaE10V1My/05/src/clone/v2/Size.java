package clone.v2;

/**
 * Created by Allbts-IT on 14/09/2016.
 */
public enum Size {

    SMALL("S"),MEDIUM("M"),LARGE("L"),EXTRA_LARGE("XL");

    private String abbreviation;

    private Size(String abbreviation){ this.abbreviation = abbreviation; }

    public String getAbbreviation() {
        return abbreviation;
    }

    public static void main(String[] args) {
//        System.out.println(Size.SMALL);

        Size s = Enum.valueOf(Size.class,"SMALL");
        System.out.println(s == Size.SMALL);

        Size[] values = Size.values();
        for (Size value : values) {
            System.out.println(value.ordinal());
        }

    }
}
