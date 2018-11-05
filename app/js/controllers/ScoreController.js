export const updateScore = (ctx, score) => {
    ctx.fillStyle = 'black';
    ctx.fillRect(420, 0, 600-420, ctx.canvas.height); // TODO: Remove hardcoded values
    ctx.fillStyle = 'gold';
    ctx.font = '30px serif';
    ctx.fillText(`SCORE: ${score}`, 3 * (ctx.canvas.width/4), 100);
};