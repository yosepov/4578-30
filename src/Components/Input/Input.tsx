import React from 'react';

interface MyInputProps {
    handleOnClick:  (event: React.FormEvent<HTMLInputElement>) => void;
    placeHolder: string;
}

export const MyInput = ({handleOnClick, placeHolder}: MyInputProps) => {


    return <input onChange={handleOnClick} placeholder={placeHolder} />
}