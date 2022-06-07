
let random = Math.floor(Math.random() * 100 +1) ;
let input = document.querySelector(".input");
let button = document.querySelector('.button');
let restart = document.querySelector('.restart');
let info = document.querySelector('.info');
let life = 3;
console.log(random);

const guess = function(){

    if(life > 1){
        if(input.value > 100 || input.value < 0){
            info.innerText = "Please Make A Valid Guess";
        } else{
            if(input.value > random){
                info.innerHTML = 'You Should Make A Smaller Guess!?!?';
                life--;
                document.querySelector('.second').innerText = input.value;
            } 

            else if(input.value < random){
                info.innerHTML = 'You Should Make A Bigger Guess!?!?';
                life--;
                document.querySelector('.first').innerText = input.value;


            } else if(input.value == random){
                info.innerHTML = 'Wow wow wow , just wow! Are you a seer!!?!'
                life--;
                button.style.display = 'none';
                restart.style.display = 'block';


                           
            }
        }
    
    } else {
        info.innerHTML = "You're out of luck, never play the lottery '";
        button.style.display = 'none';
        input.style.display = 'none';
        restart.style.display = 'block';
        life--;

    }
    document.querySelector('.can').innerHTML = life;
    input.value = "";
    
}

button.addEventListener('click', guess);


input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        guessGame();
    }
})




// let myKisi = JSON.parse(localStorage.getItem("todos"))