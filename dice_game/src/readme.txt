state = {
    pointsToWin: 100,
    dice: [null, null],
    activePlayer: 1,
    winner: false,
    players: [
        {
            currentScore: 0,
            globalScore: 0,
        },
        {
            currentScore: 0,
            globalScore: 0,
        }
    ]
};
dice: 

components: player, dice, gameBoard, buttons.

//functions
rollDice{
    let random1, random 2
   generate random number 1-6, twice
   returns dice obj with image and value. 
   calculateScore()
   if (random1 + random2 === 12)
    hold()
}
hold{
    switch active player state
    reset current score in state
}
reset{
    reset the game to initial state:
    create initialState var which holds the initial state
    and set state to initial.
}
calculateScore{
    set state players: add current to total
    check winner
}

