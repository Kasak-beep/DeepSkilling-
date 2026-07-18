import { useState } from "react";

function CurrencyConvertor() {

    const [rupees, setRupees] = useState("");
    const [euro, setEuro] = useState("");

    function handleSubmit() {

        const rate = 90; // 1 Euro = 90 INR

        const result = rupees / rate;

        setEuro(result.toFixed(2));
    }

    return (
        <div>

            <h1>Currency Convertor</h1>

            <input
                type="number"
                placeholder="Enter Rupees"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Convert
            </button>

            <h2>Euro : {euro}</h2>

        </div>
    );
}

export default CurrencyConvertor;
