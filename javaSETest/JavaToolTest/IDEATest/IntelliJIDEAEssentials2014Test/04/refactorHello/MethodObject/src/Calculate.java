public class Calculate {
    private int calculate(int one, int two, int three){
        return new Calculator(one, two, three).invoke();
    }

    private class Calculator {
        private int one;
        private int two;
        private int three;

        public Calculator(int one, int two, int three) {
            this.one = one;
            this.two = two;
            this.three = three;
        }

        public int invoke() {
            if (three == 0) {
                return 0;
            } else {
                return one + two;
            }
        }
    }
}
