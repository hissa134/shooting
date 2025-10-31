export const enemies = [];
const SIZE = 26;

function pushEnemies(canvas) {//enemyは敵の意味
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = 0;
    const vy = 5

    enemies.push({x, y, width: w, height: h, vy});
}

export function spawnEnemy(canvas) {
    if (enemies.length < 5) {//敵の数を変えられる
        pushEnemies(canvas);
    }
}
export function updateEnemies(canvas) {
    for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i];
        e.y += e.vy;
        if (e.y > canvas.height) {
            enemies.splice(i, 1);
        }
    }
}


export function drawEnemies(ctx) {
    ctx.fillStyle = "crimson";
    for (const e of enemies) {
        ctx.fillRect(e.x, e.y, e.width, e.height);
    }
}