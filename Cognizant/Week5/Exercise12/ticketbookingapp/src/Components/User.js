function User() {
    return (
        <div>

            <h2>User Page</h2>

            <h3>Available Flights</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>Source</th>
                        <th>Destination</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI101</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                    </tr>

                    <tr>
                        <td>AI202</td>
                        <td>Bangalore</td>
                        <td>Chennai</td>
                    </tr>

                    <tr>
                        <td>AI303</td>
                        <td>Kolkata</td>
                        <td>Hyderabad</td>
                    </tr>
                </tbody>
            </table>

            <br />

            <button>Book Ticket</button>

        </div>
    );
}

export default User;
