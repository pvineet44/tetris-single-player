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
import { createStage, checkCollision } from '../gameHelpers';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer);

    console.log('re-render');

    const movePlayer = (dir: number) => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 })
        }
    }


    const startGame = () => {
        console.log('start')
        // Reset everything
        setGameOver(false)
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        }
        else {
            //Gameover case
            if (player.pos.y < 2) {
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({ keyCode }: { keyCode: number }) => {
        if (!gameOver) {
            if (keyCode === 37)
                movePlayer(-1);
            else if (keyCode === 39)
                movePlayer(1);
            else if (keyCode === 40)
                dropPlayer();
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex={0} onKeyDown={e => move(e)}>
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
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;