<template>
    <div class="flex flex-col items-center justify-center space-y-16">
        <score-board mode="pvc" :firstPlayerScore="state.playerScore" :secondPlayerScore="state.computerScore"></score-board>

        <div v-show="state.message.length > 0">
            <h5 class="text-white text-3xl font-bold">{{ state.message }}</h5>
        </div>

        <div v-if="!state.playInProgress">
            <div class="flex space-x-6">
                <selection-button
                    v-for="selection in possibleSelections"
                    :key="selection"
                    :selection=selection
                    @click.prevent="state.playerSelection=selection"
                    :class="{ 'scale-125 border-green-300': state.playerSelection === selection}">
                </selection-button>
            </div>

            <div class="mt-16">
                <button-outline v-if="Math.abs(state.playerScore - state.computerScore) >= 2" @click.prevent="reset">Reset game</button-outline>
            
                <button-outline v-else @click.prevent="play" :disabled="state.playerSelection === ''">Play</button-outline>
            </div>       
        </div>

        <play-animation-board v-else></play-animation-board>
    </div>


</template>

<script setup>
import { reactive } from 'vue';

import SelectionButton from '../components/SelectionButton.vue';
import ScoreBoard from '../components/ScoreBoard.vue';
import PlayAnimationBoard from '../components/PlayAnimationBoard.vue';
import ButtonOutline from '../components/ButtonOutline.vue';

const state = reactive({
    playInProgress: false,
    playerScore: 0,
    computerScore: 0,
    playerSelection: '',
    computerSelection: '',
    message: ''
});

const possibleSelections = ['r', 'p', 's'];
const selectionWords = {
    'r': 'Rock',
    'p': 'Paper',
    's': 'Scissors'
};
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

const reset = () => {
    state.playInProgress = false;
    state.computerScore = state.playerScore = 0;
    state.message = state.playerSelection = state.computerSelection = '';
};

const play = () => {
    state.message = '';
    state.playInProgress = true;

    // Timeout for play animation
    setTimeout(function () {

        const computerSelection = state.computerSelection = computerChoice();
        const outcome = getPlayOutcome(state.playerSelection + computerSelection);

        if (outcome === 'w') {
            state.message = `You won! ${selectionWords[state.computerSelection]} beats ${selectionWords[state.playerSelection].toLowerCase()}. Whoop whoop 🎉`;
            state.playerScore += 1;
        } else if (outcome == 't') {
            state.message = `Draw! Both of you have chosen ${selectionWords[state.playerSelection].toLowerCase()}. Great minds think alike 🤔`; 
        } else {
            state.message = `You lost! ${selectionWords[state.computerSelection]} beats ${selectionWords[state.playerSelection].toLowerCase()}. Better luck next time 😥`;
            state.computerScore += 1;
        }
        
        state.playerSelection = state.computerSelection = '';
        state.playInProgress = false;

    }, 3000);
};
</script>