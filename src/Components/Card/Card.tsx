import React from 'react';

interface CardProps {
    data: string | number;
}

export const Card = ({data}: CardProps) => {

    return <div>
        {data}
    </div>
}