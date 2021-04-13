import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton'

type Props = {
    callback: Function
}

const StartButton: React.FC<Props> = ({ callback }) => (
    <StyledStartButton>Start Game</StyledStartButton>
)

export default StartButton;