// funzione che genera numeri casuali
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione che verifica se il numero e' gia' presente nell'array. Se non e' presente lo aggiunge
function uniqueRandomNumbers(array, number){
    let check = false
    while(check === false){
        if(!array.includes(number)){
            check = true
        }
    }

    return true
}

// funzione che permette línserimento dei numeri dellútente
function getUsersNumbers(){
    let userNumbers = [];

    while(userNumbers.length < 5){
        let number = parseInt(prompt('Inserisci un numero'));

        if(!userNumbers.includes(number)){
            userNumbers.push(number);
        }
    }

    return userNumbers;
}

// definisco un array vuoto che contiene i numeri generati ed uno che conterra' i numeri inseriti dall'utente
let randomNumbers = [];

// eseguo un ciclo for per popolare l'array dei numeri casuali
for(let i=0; i<5; i++){
    let number = generateRandomNumber(1,50);

    if(uniqueRandomNumbers(randomNumbers, number)){
        randomNumbers.push(number);
    }
}

console.log(randomNumbers);
document.getElementById('random-numbers').innerHTML = randomNumbers;

// timeout che nasonde i numeri
setTimeout(function(){
    document.getElementById('random-numbers').innerHTML = '';
    document.getElementById('message').innerHTML = 'Inserisci i numeri che ti ricordi';
}, 30000);

setTimeout(function(){
    // richiamo la funzione che permette l'inserimento dei numeri da parte dell'utente
    let userNumbers = getUsersNumbers();
    let guessedNumbers =[];
    let score = 0;

    for(let i=0; i<userNumbers.length; i++){
        if(randomNumbers.includes(userNumbers[i])){
            guessedNumbers.push(userNumbers[i]);
            score++;
        }
    }

    document.getElementById('message').innerHTML = `Hai indovinato ${score} numeri. I numeri corretti sono ${guessedNumbers}`;

}, 31000);
