public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories")
        };

        // Linear Search
        Product result1 = LinearSearch.search(products, 103);
        System.out.println("Linear Search Result: " + result1.productName);

        // Binary Search (array already sorted by productId)
        Product result2 = BinarySearch.search(products, 104);
        System.out.println("Binary Search Result: " + result2.productName);
    }
}