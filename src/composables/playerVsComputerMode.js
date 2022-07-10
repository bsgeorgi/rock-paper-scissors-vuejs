import { reactive, readonly } from 'vue';
import game from './game';

export default () => {
    const {
        generateComputerChoice,
        choiceToWord,
        getRoundOutcome
    } = game();

    const gameState = reactive({
        playerScore: 0,
        computerScore: 0,
        message: ''
    });

    const playGame = (playerChoice) => {
        const computerChoice = generateComputerChoice();
        const outcome = getRoundOutcome(playerChoice + computerChoice);

        const playerChoiceToWord = choiceToWord(playerChoice);
        const compChoiceToWord = choiceToWord(computerChoice);

        if (outcome === 'w') {
            gameState.message = `You won! ${playerChoiceToWord} beats ${compChoiceToWord.toLowerCase()}. Whoop whoop 🎉`;
            gameState.playerScore += 1;
        } else if (outcome == 't') {
            gameState.message = `Draw! Both of you have chosen ${playerChoiceToWord.toLowerCase()}. Great minds think alike 🤔`; 
        } else {
            gameState.message = `You lost! ${compChoiceToWord} beats ${playerChoiceToWord.toLowerCase()}. Better luck next time 😥`;
            gameState.computerScore += 1;
        }
    };

    const resetGame = () => {
        gameState.playerScore = gameState.computerScore = 0;
        gameState.message = '';
    };

    return {
        gameState: readonly(gameState),
        playGame,
        resetGame
    };
};