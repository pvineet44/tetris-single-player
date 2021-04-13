import React from 'react';

import { createStage } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display gameOver={false} text="Score" />
                        <Display gameOver={false} text="Rows" />
                        <Display gameOver={false} text="Level" />
                    </div>
                    <StartButton callback={() => { console.log('Callback Function') }} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;