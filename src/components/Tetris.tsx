import React, { useState } from 'react';

//Styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

//Custom hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ?
                        (<Display gameOver={true} text={"Game over"} />) : (
                            <div>
                                <Display gameOver={false} text="Score" />
                                <Display gameOver={false} text="Rows" />
                                <Display gameOver={false} text="Level" />
                            </div>
                        )}
                    <StartButton callback={() => { console.log('Callback Function') }} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;