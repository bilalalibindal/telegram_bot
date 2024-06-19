let score = 0;

document.getElementById('clickButton').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = 'Puan: ' + score;
});
