const playerImage = new Image();
playerImage.src = "images/player.png";

export const player = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    color: "blue",
    life: 3,
    score: 0,
};

export function initPlayer(canvas) { //initは初期化の意味
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player:", player);
}

export function drawPlayer(ctx) {
   ctx.drawImage(playerImage, player.x, player.y,
player.width, player.height);
}