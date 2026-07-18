import { useState } from "react";

function EventExamples() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Have a nice day.");
    }

    function increase() {
        increment();
        sayHello();
    }

    function sayWelcome(message) {
        alert(message);
    }

    function onPress() {
        alert("I was clicked");
    }

    return (
        <div>

            <h1>Counter : {count}</h1>

            <button onClick={increase}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={onPress}>
                Synthetic Event
            </button>

        </div>
    );
}

export default EventExamples;
