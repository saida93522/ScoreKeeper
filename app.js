const p1Btn = document.querySelector('.p1btn');
const p2Btn = document.querySelector('.p2btn');
const resetBtn = document.querySelector('.reset')
let winningScoreSelect = document.querySelector('#playto');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;


p1Btn.addEventListener('click',function(e) {
    if (!isGameOver){
        p1Score++;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger-dark');
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener('click',function(e){
    if(!isGameOver){
        p2Score++;
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger-dark');
            p2Btn.disabled = true;
            p1Btn.disabled = true;
        }
        p2Display.textContent = p2Score;
    }

});
winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
});

resetBtn.addEventListener('click',reset)


function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = 0;
    p2Display.textContent = 0;

    p2Display.classList.remove('has-text-success','has-text-danger-dark');
    p1Display.classList.remove('has-text-success','has-text-danger-dark');

    p1Btn.disabled = false;
    p2Btn.disabled = false;
};

