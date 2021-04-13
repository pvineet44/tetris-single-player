import React from 'react';

import { StyledDisplay } from './styles/StyledDisplay';

type Prop = {
    text: string,
    gameOver: boolean
}

const Display: React.FC<Prop> = ({ gameOver, text }) => (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;