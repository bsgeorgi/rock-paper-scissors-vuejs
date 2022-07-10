<template>
    <div class="flex flex-col items-center justify-center space-y-16">
        <score-board mode="pvc" :firstPlayerScore="gameState.playerScore" :secondPlayerScore="gameState.computerScore"></score-board>

        <div v-show="gameState.message.length > 0">
            <h5 class="text-white text-3xl font-bold">{{ gameState.message }}</h5>
        </div>

        <div v-if="!state.playInProgress">
            <div class="flex space-x-6">
                <selection-button
                    v-for="selection in possibleChoices"
                    :key="selection"
                    :selection=selection
                    @click.prevent="state.playerSelection=selection"
                    :class="{ 'scale-125 border-green-300': state.playerSelection === selection}">
                </selection-button>
            </div>

            <div class="mt-16">
                <button-outline v-if="hasGameFinished" @click.prevent="reset">Reset game</button-outline>
                <button-outline v-else @click.prevent="play" :disabled="state.playerSelection === ''">Play</button-outline>
            </div>       
        </div>

        <play-animation-board v-else></play-animation-board>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import playerVsComputerMode from './../composables/playerVsComputerMode';
import game from './../composables/game';

import SelectionButton from '../components/SelectionButton.vue';
import ScoreBoard from '../components/ScoreBoard.vue';
import PlayAnimationBoard from '../components/PlayAnimationBoard.vue';
import ButtonOutline from '../components/ButtonOutline.vue';

const state = reactive({
    playInProgress: false,
    playerSelection: ''
});

const { gameState, resetGame, playGame } = playerVsComputerMode();
const { possibleChoices } = game();

const reset = () => {
    state.playInProgress = false;
    state.playerSelection = '';
    resetGame();
};

const hasGameFinished = computed(() => {
    return ((gameState.playerScore + gameState.computerScore) >= 3 && gameState.playerScore > gameState.computerScore
            || gameState.computerScore > gameState.playerScore) ||
    Math.abs(gameState.playerScore - gameState.computerScore) >= 2;
});

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