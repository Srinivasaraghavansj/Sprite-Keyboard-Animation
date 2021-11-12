
// bg.onload = function () {
//     ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

// }
// playerSprite.onload = function () {
//     ctx.drawImage(playerSprite, 0, 0, canvas.width, canvas.height);
// }



// window.onload = function () {

    const canvas = document.getElementById('sprite');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;
    var ctr = 0;
    const keys = [];
    var then = Date.now();





    const player = {
        x: 200,
        y: 150,
        width: 32,
        height: 48,
        frameX: 0,
        frameY: 2,
        speed: 9,
        moving: false,
        display_factor: 2
    };



    const playerSprite = new Image();
    playerSprite.src = "assets/protocoldroid2.png";

    const bg = new Image();
    bg.src = "assets/background.png";



    function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
    // function animate() {
    //     if (Date.now() - then > 70) {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    //         drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * player.display_factor, player.height * player.display_factor)
    //         movePlayer();
    //         handlePlayerFrame();
    //         then = Date.now();
    //     }
    //     requestAnimationFrame(animate);
    // }

    // function movePlayer() {
    //     if (keys[38] && player.y > 100) {
    //         player.y -= player.speed;
    //         player.frameY = 3;
    //         player.moving = true;
    //     }
    //     if (keys[37] && player.x > 0) {
    //         player.x -= player.speed;
    //         player.frameY = 1;
    //         player.moving = true;
    //     }
    //     if (keys[40] && player.y < canvas.height - player.height) {
    //         player.y += player.speed;
    //         player.frameY = 0;
    //         player.moving = true;
    //     }
    //     if (keys[39] && player.x < canvas.width - player.width) {
    //         player.x += player.speed;
    //         player.frameY = 2;
    //         player.moving = true;
    //     }
    // }



    function handlePlayerFrame() {
        if (player.frameX < 3 && player.moving) player.frameX++;
        else player.frameX = 0;
    }

    // window.addEventListener("keydown", function (e) {
    //     keys[e.keyCode] = true;
    //     player.moving = true;
    // });
    // window.addEventListener("keyup", function (e) {
    //     delete keys[e.keyCode];
    //     player.moving = false;
    // });

    // animate();

    function up() {
        anim = requestAnimationFrame(up);
        if (Date.now() - then > 70) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
            drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * player.display_factor, player.height * player.display_factor);
            ctr += 1;
            if (ctr > 100) {
                ctr = 0;
                cancelAnimationFrame(anim);
                player.moving = false;
                return;
            }
            player.y -= player.speed;
            player.frameY = 3;
            player.moving = true;
            handlePlayerFrame();
            then = Date.now();
        }

    }
// }