import { useEffect, useState } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player: any, resetPlayer: any) => {
    const [stage, setStage] = useState<any>(createStage());

    useEffect(() => {
        console.log('player: ', player.pos.x)
        const updateStage = (prevStage: any) => {
            // First flush the stage

            const newStage = prevStage.map((row: any) =>
                row.map((cell: any) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );

            // Then draw the tetramino
            player.tetramino.forEach((row: any, y: any) => {
                row.forEach((value: any, x: any) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ]
                    }
                })
            });
            return newStage;
        };
        setStage((prev: any) => updateStage(prev))
    }, [player])

    return [stage, setStage];
}