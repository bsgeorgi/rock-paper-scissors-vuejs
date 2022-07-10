import { reactive, computed, readonly } from 'vue';
import helper from './helper';

export default () => {
    const hasGameFinished = () => {
        const totalGameRounds = gameState.firstPlayerScore + gameState.secondPlayerScore;
        const isFirstPlayerWinning = gameState.firstPlayerScore > gameState.secondPlayerScore;
        const isSecondPlayerWinning = gameState.secondPlayerScore > gameState.firstPlayerScore;
        const differenceBiggerThanTwo = Math.abs(gameState.firstPlayerScore - gameState.secondPlayerScore) >= 2;

        const res = ((totalGameRounds >= 3) && (isFirstPlayerWinning || isSecondPlayerWinning)) || differenceBiggerThanTwo;;

        console.log(totalGameRounds, isFirstPlayerWinning, isSecondPlayerWinning, differenceBiggerThanTwo, res)
    
        return ((totalGameRounds >= 3) && (isFirstPlayerWinning || isSecondPlayerWinning)) || differenceBiggerThanTwo;
    };

    const {
        generateComputerChoice,
        choiceToWord,
        getRoundOutcome
    } = helper();

    const gameState = reactive({
        firstPlayerScore: 0,
        secondPlayerScore: 0,
        firstPlayerWonLastRound: null,
        message: '',
        totalRounds: 0
    });

    const playGame = (firstPlayerChoice, firstPlayerName = 'You', secondPlayerName = 'Computer') => {
        const secondPlayerChoice = generateComputerChoice();
        const outcome = getRoundOutcome(firstPlayerChoice + secondPlayerChoice);

        const firstPlayerChoiceWord = choiceToWord(firstPlayerChoice);
        const secondPlayerChoiceWord = choiceToWord(secondPlayerChoice);

        if (outcome === 'w') {
            gameState.message = `${firstPlayerName} won! ${firstPlayerChoiceWord} beats ${secondPlayerChoiceWord.toLowerCase()}. Whoop whoop 🎉`;
            gameState.firstPlayerScore += 1;
            gameState.firstPlayerWonLastRound = true;
        } else if (outcome == 't') {
            gameState.message = `Draw! Both players have chosen ${firstPlayerChoiceWord.toLowerCase()}. Great minds think alike 🤔`; 
        } else {
            gameState.message = `${secondPlayerName} won! ${secondPlayerChoiceWord} beats ${firstPlayerChoiceWord.toLowerCase()}. Better luck next time 😥`;
            gameState.secondPlayerScore += 1;
            gameState.firstPlayerWonLastRound = false;
        }

        ++gameState.totalRounds;
    };

    const resetGame = () => {
        gameState.firstPlayerScore = gameState.secondPlayerScore = 0;
        gameState.firstPlayerWonLastRound = null;
        gameState.message = '';
        gameState.totalRounds = 0;
    };

    return {
        gameState: readonly(gameState),
        playGame,
        resetGame,
        hasGameFinished
    };
};