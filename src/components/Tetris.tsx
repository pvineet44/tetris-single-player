import React from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

    return (
        <div>
            <Stage stage={null} />
            <aside>
                <div>
                    <Display gameOver={false} text="Score" />
                    <Display gameOver={false} text="Rows" />
                    <Display gameOver={false} text="Level" />
                </div>
                <StartButton callback={() => { console.log('Callback Function') }} />
            </aside>
        </div>
    );
};

export default Tetris;