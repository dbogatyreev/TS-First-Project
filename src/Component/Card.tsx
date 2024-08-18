import React, { ReactNode, useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width?: string;
    height?: string;
    variant?: CardVariant;
    children?: ReactNode;
}

const Card = ({
    width,
    height,
    variant,
    children
}: CardProps) => {
    const [state, setState] = useState(0)
    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
        >
            {children}
        </div >
    );
};

export default Card;
