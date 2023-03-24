import React, { useState } from "react";


export const ChangeColor = () => {

    const [color, setColor] = useState('');

    const changeButtonColor = (event: React.FormEvent<HTMLInputElement>) => {
        
        setColor(event.currentTarget.value)
    }

    return <div>
        <input onChange={changeButtonColor} /> 
        <button style={{background: color}} >change</button>
    </div>
    
} 