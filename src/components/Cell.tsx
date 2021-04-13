import React from 'react';

type Props = {
    type: number | string;
}

const Cell: React.FC<Props> = ({ type }) => (
    <div>cell</div>
);

export default Cell;