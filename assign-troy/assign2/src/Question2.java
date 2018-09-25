import java.util.Arrays;
import java.util.Comparator;
import java.util.Objects;

public class Question2 {

    public static class Combatant {

        private String name;
        private double hittingLikelihood;
        private boolean alive = true;

        public void setAlive(boolean newAlive) {
            alive = newAlive;
        }

        public String getName() {
            return name;
        }

        public double getHittingLikelihood() {
            return hittingLikelihood;
        }

        public boolean getAlive() {
            return alive;
        }

        //created the alive getter
        //no constructors created before
        public Combatant(String name, double likelihood) {
            this.name = name;
            hittingLikelihood = likelihood;
        }
        //constructor is now created
        //need to create a method for the duelists to shoot at each other

        public void shootAtTarget(Combatant target) {
            double randomNum = Math.random();
//            System.out.println("randomNum " + randomNum);
            if (this.hittingLikelihood == 1) {
                target.setAlive(false);
            } else if (randomNum <= this.hittingLikelihood) {
                target.setAlive(false);
            }
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Combatant combatant = (Combatant) o;
            return Objects.equals(name, combatant.name);
        }

        @Override
        public int hashCode() {
            return Objects.hash(name);
        }


    }

    public static void main(String[] args) {

        //10,000 fights, shot the best first
        int deadPoolWins = 0;
        int kingKongWins = 0;
        int spikdermanWins = 0;

        for (int i = 0; i < 10000; i++) {
            Combatant[] combatants = {
                    new Combatant("DeadPool", (1 / 3)),
                    new Combatant("Kingkong", (1 / 2)),
                    new Combatant("Spiderman", 1)
            };
            int livingNum = 3;
            // shoot in turn
            for (int j = 0; j < combatants.length && livingNum >= 1; j++) {
                final Combatant shooter = combatants[j];
//                    living shooter can shoot
                if (shooter.getAlive()) {
                    Combatant target = Arrays.asList(combatants)
                            .stream()
                            .filter(combatant -> !combatant.equals(shooter) && combatant.getAlive())
                            .max(Comparator.comparingDouble(Combatant::getHittingLikelihood))
                            .get();
                    combatants[j].shootAtTarget(target);
                    // if target is dead, livingNum is descreased
                    if (!target.getAlive()) {
                        System.out.println(target.getName() + " is killed");
                        livingNum--;
                    }

                }
            }

            Combatant winner = Arrays.stream(combatants)
                    .filter(combatant -> combatant.getAlive())
                    .findAny().get();
            String name = winner.getName();
            if (name.equals("DeadPool")) {
                deadPoolWins++;
            } else if (name.equals("Kingkong")) {
                kingKongWins++;
            } else {
                spikdermanWins++;
            }
        }

        System.out.println("DeadPool wins " + deadPoolWins + "/10,000 fights");
        System.out.println("Kingkong wins " + kingKongWins + "/10,000 fights");
        System.out.println("Spikerman wins " + spikdermanWins + "/10,000 fights");

    }
}
