function BookDetails() {

    const books = [
        {
            id: 1,
            name: "React Basics",
            author: "John",
            price: 500
        },
        {
            id: 2,
            name: "Java Programming",
            author: "James",
            price: 650
        }
    ];

    return (
        <div>
            <h2>Book Details</h2>

            {books.map(book => (
                <div key={book.id}>
                    <h3>{book.name}</h3>
                    <p>Author : {book.author}</p>
                    <p>Price : ₹{book.price}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default BookDetails;
