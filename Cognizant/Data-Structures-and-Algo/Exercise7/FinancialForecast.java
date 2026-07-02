public class FinancialForecast {

    // Recursive method to calculate future value
    public static double predictFutureValue(double presentValue,
                                            double growthRate,
                                            int years) {

        // Base case
        if (years == 0) {
            return presentValue;
        }

        // Recursive case
        return predictFutureValue(presentValue, growthRate, years - 1)
                * (1 + growthRate);
    }

    public static void main(String[] args) {

        double presentValue = 10000;   // initial investment
        double growthRate = 0.10;      // 10% annual growth
        int years = 5;

        double futureValue =
                predictFutureValue(presentValue, growthRate, years);

        System.out.println("Future Value after " + years + " years: "
                + futureValue);
    }
}
