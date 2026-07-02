public class AdapterTest {

    public static void main(String[] args) {


        PaymentProcessor paypalProcessor =
                new PayPalAdapter(new PayPalGateway());
        paypalProcessor.processPayment(500.0);


        PaymentProcessor stripeProcessor =
                new StripeAdapter(new StripeGateway());
        stripeProcessor.processPayment(1200.0);
    }
}