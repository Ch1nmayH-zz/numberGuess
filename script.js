
let guessBtn = document.getElementById("gSubmit");
let guess = document.getElementById("theGuess");
let hint = document.getElementById('hint');
let printValue = document.getElementById('firstInput');
let announce = document.getElementById('print');
let theNum = Math.floor(Math.random() * 20);
if(theNum === 0){
    theNum = Math.floor(Math.random() * 20);
}
let scorev = document.getElementById('scorev');
let hscorev = document.getElementById('hscorev');


scorev.textContent = 20;
scorev.textContent = Number(scorev.textContent);

hscorev.textContent = Number(hscorev.textContent);


function guessGame(){

 

    convertedGuess = Number(guess.value);
    if(convertedGuess > 20 || convertedGuess <= 0){
        alert('Please choose the number between 0 to 20')
        guess.value = 0;

    }
    else if(convertedGuess > theNum){
        hint.className = 'hint';
       hint.textContent = 'Too Big! try something Smaller'
       scorev.textContent-=1;
    }
    else 
    if(convertedGuess < theNum){

        hint.className = 'hint';
        scorev.textContent-=1;
       hint.textContent = 'Too Small! try something Bigger'
    }

    else if(convertedGuess === theNum){

       hint.className = 'won';
       announce.textContent = 'The Number was'
       hint.textContent = 'Bingo!! You won!'
       printValue.value = theNum;
       let finalScore = scorev.textContent;
       highscoreCalc(finalScore)
    }

    
   
    
}

function resetScore(){

    theNum = Math.floor(Math.random() * 20);
    announce.textContent = 'Guess My Number!';
    hint.textContent = ''
    guess.value = 0;
    printValue.value  = '?';
    scorev.textContent = 20;

    
}

function highscoreCalc(finalScore){

    if(finalScore > hscorev.textContent )
    {
        hscorev.textContent  = finalScore;

    }
}