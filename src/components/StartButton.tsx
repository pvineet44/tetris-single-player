import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton'

type Props = {
    callback: any
}

const StartButton: React.FC<Props> = ({ callback }) => {
    return (
        <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
    )
}

export default StartButton;