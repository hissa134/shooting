document.getElementById("shirushi").innerText = "これはゲームです";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


//fillRect(x座標, y座標, 横幅, 縦幅)

//自分のキャラクターに見立てた四角形を作る

// width="480", height="640"
let x = 225;
let tama = 0;
    

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        x -= 10;
    } else if (e.key === "ArrowRight") {
        x += 10;
    } else if (e.key === "Space") {
        tama += 1;
    }
});

let y1 = 0;
let y2 = -150;

function gameLoop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(300, y1, 30, 30);
    y1 += 5;
    ctx.fillStyle = "red";
    ctx.fillRect(150, y2, 30, 30);
    y2 += 5;
    ctx.fillStyle = "blue";
    ctx.fillRect(x, 480, 30, 30);
    if (tama > 0) {
    ctx.fillStyle = "white";
        ctx.fillRect(x + 10, 480 - tama * 10, 10, 10);
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();