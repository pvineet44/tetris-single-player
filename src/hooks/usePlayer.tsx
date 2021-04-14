import { useCallback, useState } from 'react';
import { STAGE_WIDTH } from '../gameHelpers';
import { randomTetromino, TETRAMINOS } from '../tetraminos';

export const usePlayer = () => {
    const [player, setPlayer] = useState(
        {
            pos: {
                x: 0,
                y: 0,
            },
            tetramino: TETRAMINOS[0].shape,
            collided: false,
        }

    );

    const updatePlayerPos: any = async ({ x, y, collided }: { x: number, y: number, collided: boolean }) => {
        let newPlayer = {
            pos: {
                x: player.pos.x + x,
                y: player.pos.y + y,
            },
            tetramino: player.tetramino,
            collided: collided,
        }
        await setPlayer(newPlayer)

    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetramino: randomTetromino().shape,
            collided: false
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer];
}