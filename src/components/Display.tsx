import React from 'react';

type Prop = {
    text: string,
    gameOver: boolean
}

const Display: React.FC<Prop> = ({ gameOver, text }) => (
    <div>{text}</div>
);

export default Display;