export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player: { tetramino: string | any[]; pos: { y: number; x: number; }; }, stage: { [x: string]: { [x: string]: string[]; }; }, { x: moveX, y: moveY }: any) => {
    for (let y = 0; y < player.tetramino.length; y += 1)
        for (let x = 0; x < player.tetramino[y].length; x += 1) {
            //1.Check whether we are in a tetrimino cell
            if (player.tetramino[y][x] !== 0) {
                if (
                    //2. Check that our move is in the game areas height (y)
                    //We should not go through the bottom of play area
                    (!stage[y + player.pos.y + moveY]) ||

                    //3. Check that our move is inside game area width (x)
                    (!stage[y + player.pos.y + moveY][x + player.pos.x + moveX]) ||

                    //4. Check that the cell we are moving to isn't set to clear
                    (!stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear')
                ) {
                    return true
                }
            }
        }
}