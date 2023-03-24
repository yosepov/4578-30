
import react, { useState } from 'react';
import './App.css';
import {Button}  from './Components/Button/Button';
import { Card } from './Components/Card/Card';
import { MyInput } from './Components/Input/Input';

function App() {
    const [counter, setCounter] = useState(1);
    const [text, setText] = useState('');
    const setMyText = (event: React.FormEvent<HTMLInputElement>) => {
        let tempText = event.currentTarget.value ;
        setText(tempText);
    }

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
                <Card data={counter + ' ' + text} />
                <MyInput handleOnClick={setMyText} placeHolder={'Enter your text'} />
                <Button title='Incerement' handleOnClick={increment} />
                <Button title='Decrement' handleOnClick={decrement} />
            </header>
        </div>
    );
}

export default App;
