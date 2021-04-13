import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETRAMINOS } from '../tetraminos';

type Props = {
    type: number | string;
}

const Cell: React.FC<Props> = ({ type }) => (
    <StyledCell type={type} color={TETRAMINOS[type].color}></StyledCell>
);

export default Cell;