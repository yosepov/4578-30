
import  { useState } from 'react';
import './App.css';
import { Button } from './Components/Button/Button';
import { Card } from './Components/Card/Card';
import { MyCard } from './Components/MyCard/MyCard';



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

 
    const printConsole = (text: string) => {
        console.log(text)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Card data={counter} />
                <Button title='Incerement' handleOnClick={increment} />
                <Button title='Decrement' handleOnClick={decrement} />
                <MyCard text='Print first one..' handleOnClick={printConsole} />
                <MyCard text='Print second one..' handleOnClick={printConsole} />
                <div onClick={() => { }}>Hello world</div>
            </header>
        </div>
    );
}


export default App;
