let grantsHealth = 10;

let userHealth = 40;

let userWins = 0;

let play = prompt("Would you like to play?");

if (play === "yes"); {
    let opponentName = prompt("What is your name?"); 
    }
    while (play) {
    userHealth -= Math.floor(Math.random()*2) + 1;
    grantsHeath -= Math.floor(Math.random()*2) + 1;
    
    console.log(userHealth);
}

// }else{(play === "no"); 

// }