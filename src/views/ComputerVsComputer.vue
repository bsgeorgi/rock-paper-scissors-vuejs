<template>
    <div class="flex flex-col items-center justify-center space-y-16">
        <score-board
            mode="cvc"
            :firstPlayerScore="gameState.playerScore"
            :secondPlayerScore="gameState.computerScore"
            firstPlayerName="Computer 1"
            secondPlayerName="Computer 2">
        </score-board>

        <div>
            <h5 class="text-white text-3xl font-bold">This is my message</h5>
        </div>

        <div>
            <div class="flex justify-between space-x-12">
                <selection-button selection="p" disabled></selection-button>
                <selection-button selection="r" disabled></selection-button>
            </div>
        </div>

        <div v-if="!state.playInProgress">
            <div>
                <button-outline v-if="Math.abs(gameState.playerScore - gameState.computerScore) >= 2" @click.prevent="reset">Reset game</button-outline>

                <button-outline v-else @click.prevent="play" :disabled="state.playerSelection === ''">Start Game</button-outline>
            </div>       
        </div>

        <play-animation-board v-if="state.roundPlayInProgress"></play-animation-board>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import gamePvC from './../composables/gamePvC';

import ScoreBoard from '../components/ScoreBoard.vue';
import PlayAnimationBoard from '../components/PlayAnimationBoard.vue';
import ButtonOutline from '../components/ButtonOutline.vue';
import SelectionButton from '../components/SelectionButton.vue';

const state = reactive({
    playInProgress: false,
    playerSelection: '',
    roundPlayInProgress: false
});

const { possibleSelections, gameState, resetGame, playGame } = gamePvC();

const reset = () => {
    state.playInProgress = false;
    state.playerSelection = '';
    resetGame();
};

const play = () => {
    state.message = '';
    state.playInProgress = true;

    // Timeout for play animation
    setTimeout(function () {
        playGame(state.playerSelection);

        state.playerSelection = '';
        state.playInProgress = false;
    }, 3000);
};
</script>