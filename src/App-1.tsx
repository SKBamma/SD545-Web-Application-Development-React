import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


{/*. Create a simple React component called Counter that displays a counter value initialized to 0. 
Include two buttons: one for incrementing the counter and another for decrementing it. 
Use useState to manage the counter state. */}


function Counter() {
    const [counter, setCounter] = useState<number>(0);
    const increase = () => {
        setCounter(counter + 1);
    };
    const decrease = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }

    };

    return (
        <div>
            <h4>counter: {counter}</h4>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );


}
export default Counter;









// function App2() {
//   const handleEvent = (username: string) => {
//     console.log(`Welcome ${username}`);
//   };
//   // const result = handleEvent("Suresh");
//   return <button onClick={() => handleEvent("Suresh")}>Welcome</button>;
// }
// export default App2;


// function Greeting() {
//   const greet = (user: string, message: string) => {
//     console.log(`Hi ${user}, you are ${message}. `);
//   };
//   return <button onClick={() => greet("Suresh", "Welcome")}>Greet</button>;

// }

// function Greeting() {
//     let [count, setCount] = useState<number>(0);

//     const clickHandler = () => {
//         setCount(++count);
//         console.log(count);
//         console.log(count + 2);
//     };
//     return (
//         <div>
//             {count}
//             <button onClick={clickHandler}>Click Me</button>
//         </div>
//     );
// }
// export default Greeting;
