// Snake Game Variables
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');
const gameOverMessage = document.getElementById('game-over-message');

canvas.width = 400;
canvas.height = 400;

const gridSize = 20;
let snake = [{ x: 200, y: 200 }];
let food = { x: randomGridPosition(), y: randomGridPosition() };
let direction = { x: 0, y: 0 };
let gameInterval;
let speed = 200;

// function generate random grid position not on snake
function randomGridPosition() {
    let position;
    let isOnSnake;

    do {
        // generate radom position
        position = {
            x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
        };

        // check if the position is on snake
        isOnSnake = snake.some(segment => segment.x === position.x && segment.y === position.y);
    } while (isOnSnake); // keep generating until position not on snake

    return position;
}

function drawRect(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, gridSize, gridSize);
}

function drawGame() {
    //clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw food
    drawRect(food.x, food.y, 'red');

    // draw snake
    snake.forEach(segment => drawRect(segment.x, segment.y, 'green'));
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x * gridSize, y: snake[0].y + direction.y * gridSize };
    snake.unshift(head); // Add new head

    // check if the snake eats food
    if (head.x === food.x && head.y === food.y) {
        food = randomGridPosition(); // respawn food squaare
    } else {
        snake.pop(); // remove tail
    }
}

function checkCollision() {
    const head = snake[0];

    // check if snake hits side
if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        endGame();
    }

    //check if snake hits itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
        }
    }
}

function endGame() {clearInterval(gameInterval);
    gameOverMessage.textContent = 'Game Over!';
    gameOverMessage.style.display = 'block';
    startButton.style.display = 'block'; // Show start button again
}

function updateGame() {moveSnake();checkCollision();
    drawGame();
}

function startGame() {
    // reset variables
    snake = [{ x: 200, y: 200 }];direction = { x: 0, y: 0 };
    food = randomGridPosition();
    gameOverMessage.style.display = 'none';
    startButton.style.display = 'none';

    gameInterval = setInterval(updateGame, speed);
}

//listeners

document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});
startButton.addEventListener('click', startGame);
