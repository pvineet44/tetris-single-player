import { useEffect, useState } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player: any, resetPlayer: any) => {
    const [stage, setStage] = useState<any>(createStage());

    useEffect(() => {
        console.log('player: ', player.pos.x)
        const updateStage = (prevStage: any) => {
            console.log(prevStage);
            //Flush the stage
            const newStage = prevStage.map((row: any) =>
                row.map((cell: any) => (
                    cell[1] === 'clear' ? [0, 'clear'] : cell
                )));


            //Then draw tetromino
            player.tetramino.forEach((row: any, y: any) => {
                row.forEach((value: any, x: any) => {
                    if (value !== 0) {
                        console.log('y: ', y + player.pos.y, 'x: ', x + player.pos.x)
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });
            //Then check if collided
            if (player.collided) {
                console.log("called twice")
                resetPlayer();
                // return sweepRows(newStage);
            }
            return newStage;
        }

        setStage((prev: any) => updateStage(prev))

    }, [player])

    return [stage, setStage];
}