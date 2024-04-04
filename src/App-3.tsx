import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


{/* 3. Build a component that generates a random number between 1 and 100 when a button is clicked. 
Display the generated number using useState.
*/
}


function GenerateNumbs() {
  const [randNumber, setrandNumber] = useState<number>(0);
  const numbsGenerator = () => {
    const newNum = Math.floor(Math.random() * 100) + 1;
    setrandNumber(newNum);
    console.log(newNum);
  };
  return (
    <div>
      <button onClick={numbsGenerator}>Random Num Generator</button>
      <h4>Random Number is: {randNumber}</h4>
    </div>

  );
}
export default GenerateNumbs;













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
//   let [count, setCount] = useState<number>(0);

//   const clickHandler = () => {
//     setCount(++count);
//     console.log(count);
//     console.log(count + 2);
//   };
//   return (
//     <div>
//       {count}
//       <button onClick={clickHandler}>Click Me</button>
//     </div>
//   );
// }
// export default Greeting;
