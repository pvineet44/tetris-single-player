import React from 'react';

type Props = {
    callback: Function
}

const StartButton: React.FC<Props> = ({ callback }) => (
    <div>Start Game</div>
)

export default StartButton;