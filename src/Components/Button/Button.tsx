import React from 'react';

interface ButtonProps  {
    handleOnClick: () => void;
    title: string;
}

 export const Button =  ({handleOnClick, title}: ButtonProps) => {
    return <button onClick={handleOnClick}>{title}</button>
}

