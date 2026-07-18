function ListofPlayers() {

    const players = [
        { name: "Sachin", score: 90 },
        { name: "Virat", score: 82 },
        { name: "Rohit", score: 65 },
        { name: "Dhoni", score: 75 },
        { name: "Rahul", score: 50 },
        { name: "Pant", score: 60 },
        { name: "Hardik", score: 88 },
        { name: "Jadeja", score: 73 },
        { name: "Ashwin", score: 68 },
        { name: "Shami", score: 55 },
        { name: "Bumrah", score: 80 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div style={{ margin: "20px" }}>
            <h1>List of Players</h1>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Players having score below 70</h2>

            <ul>
                {lowScorePlayers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
