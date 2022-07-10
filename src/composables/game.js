export default () => {
    const possibleChoices = [
        'r',
        'p',
        's'
    ];

    const choicesWordDict = {
        'r': 'Rock',
        'p': 'Paper',
        's': 'Scissors'
    };

    const generateComputerChoice = () => {
        return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    };

    const choiceToWord = (c) => {
        if (!choicesWordDict.hasOwnProperty(c)) {
            return null;
        }
        return choicesWordDict[c];
    };

    const getRoundOutcome = (combination) => {
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

    return {
        possibleChoices,
        generateComputerChoice,
        choiceToWord,
        getRoundOutcome
    };
};