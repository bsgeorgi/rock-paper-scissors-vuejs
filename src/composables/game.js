import { reactive, readonly } from 'vue';

export default () => {
    const gameState = reactive({
        playerScore: 0,
        computerScore: 0,
        message: ''
    });

    const possibleSelections = ['r', 'p', 's'];
    const selectionWords = {
        'r': 'Rock',
        'p': 'Paper',
        's': 'Scissors'
    };

    const selectionToWord = (s) => {
        return selectionWords[s];
    }

    const computerChoice = () => {
        return possibleSelections[Math.floor(Math.random() * possibleSelections.length)];
    };

    const getPlayOutcome = (combination) => {
        var outcome = '';
        switch(combination) {
            case 'rs':
            case 'pr':
            case 'sp':
                outcome = 'w';
                break;
            
            case 'rr':
            case 'pp':
            case 'ss':
                outcome = 't'; // tie
                break;
    
            default:
                outcome = 'l';
                break;
        }
        return outcome;
    };

    const playGame = (playerSelection) => {
        const getComputerChoice = computerChoice();
        const outcome = getPlayOutcome(playerSelection + getComputerChoice);

        if (outcome === 'w') {
            gameState.message = `You won! ${selectionToWord(getComputerChoice)} beats ${selectionToWord(playerSelection).toLowerCase()}. Whoop whoop 🎉`;
            gameState.playerScore += 1;
        } else if (outcome == 't') {
            gameState.message = `Draw! Both of you have chosen ${selectionToWord(playerSelection).toLowerCase()}. Great minds think alike 🤔`; 
        } else {
            gameState.message = `You lost! ${selectionToWord(getComputerChoice)} beats ${selectionToWord(playerSelection).toLowerCase()}. Better luck next time 😥`;
            gameState.computerScore += 1;
        }
    };

    const resetGame = () => {
        gameState.playerScore = gameState.computerScore = 0;
        gameState.message = '';
    };


    return {
        gameState: readonly(gameState),
        possibleSelections,
        playGame,
        resetGame
    };
};