
import react, { useState } from 'react';
import './App.css';
import {Button}  from './Components/Button/Button';
import { Card } from './Components/Card/Card';

function App() {
    const [counter, setCounter] = useState(1);

    const increment = () => {
        let tempCounter = counter + 1;
        setCounter(tempCounter);
    }
    
    const decrement = () => {
        let tempCounter = counter - 1;
        setCounter(tempCounter);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Card data={counter} />
                <Button title='Incerement' handleOnClick={increment} />
                <Button title='Decrement' handleOnClick={decrement} />
            </header>
        </div>
    );
}

export default App;
