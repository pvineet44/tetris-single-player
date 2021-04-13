import React from 'react';
import Cell from './Cell';

import { StyledStage } from './styles/StyledStage'

type Props = {
    stage: any
}

const Stage: React.FC<Props> = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {
            stage.map((row: any[]) => row.map((cell: any, x: number) => <Cell key={x} type={cell[0]} />))
        }
    </StyledStage>
)

export default Stage;