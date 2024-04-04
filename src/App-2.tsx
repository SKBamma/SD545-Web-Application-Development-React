import React, { ChangeEvent, MouseEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';


{/* 2. Create a temperature converter component that allows users to enter 
a temperature in Celsius and converts it to Fahrenheit when a button is clicked.
 Use useState to manage the temperature input and output*/ }

function TempConverter() {
    const [celsius, setCelsius] = useState<number>(0);
    const [fahrenhiet, setFahrenhiet] = useState<number>(32);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCelsius(Number(e.currentTarget.value));
    };

    const celsiusToFaherenhiet = () => {
        const newFaherenhiet = (celsius * 9 / 5) + 32;
        setFahrenhiet(newFaherenhiet);
    };


    return (
        <div>
            <br />
            <input value={celsius} onChange={handleChange} />
            <button onClick={celsiusToFaherenhiet}>Convert 2 Faherenheit</button>
            <h4> The celsius {celsius} is equal to {fahrenhiet} in fahrenhiet.</h4>
        </div>
    );
}

export default TempConverter;











// function App() {
//   const clickHandler = () => {
//     console.log('Button is clicked!!!');
//   };
//   return (
//     <button onClick={clickHandler}>Click Me!!</button>
//   );
// }
// export default App;
