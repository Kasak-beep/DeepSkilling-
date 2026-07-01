public class BuilderTest {

    public static void main(String[] args) {

        // Basic Computer
        Computer basicComputer = new Computer.Builder()
                .setCpu("Intel i3")
                .setRam(8)
                .setStorage(256)
                .setGraphicsCard(false)
                .setBluetooth(true)
                .build();

        // Gaming Computer
        Computer gamingComputer = new Computer.Builder()
                .setCpu("Intel i9")
                .setRam(32)
                .setStorage(1024)
                .setGraphicsCard(true)
                .setBluetooth(true)
                .build();

        // Display configurations
        System.out.println("Basic Computer:");
        basicComputer.showConfiguration();

        System.out.println("Gaming Computer:");
        gamingComputer.showConfiguration();
    }
}