import React from 'react';
import Cell from './Cell';

type Props = {
    stage: any
}

const Stage: React.FC<Props> = ({ stage }) => (
    <div>
        <Cell type={'hello'} />
    </div>
)

export default Stage;