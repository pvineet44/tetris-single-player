import React from 'react';
import Cell from './Cell';

type Props = {
    stage: any
}

const Stage: React.FC<Props> = ({ stage }) => (
    <div>
        {
            stage.map((row: any[]) => row.map((cell: any, x: number) => <Cell key={x} type={cell[0]} />))
        }
    </div>
)

export default Stage;