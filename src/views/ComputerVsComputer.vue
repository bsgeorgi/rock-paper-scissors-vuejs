<template>
    <div class="flex flex-col items-center justify-center space-y-16">
        <score-board
            mode="cvc"
            :firstPlayerScore="gameState.firstPlayerScore"
            :secondPlayerScore="gameState.secondPlayerScore"
            :firstPlayerName=state.firstPlayerName
            :secondPlayerName=state.secondPlayerName>
        </score-board>

        <div v-show="gameState.message.length > 0">
            <h5 class="text-white text-3xl font-bold">{{ gameState.message }}</h5>
        </div>

        <div v-if="!state.roundPlayInProgress">
            <div class="flex justify-between space-x-12">
                <selection-button
                    selection="p"
                    :class="gameState.firstPlayerWonLastRound == null ? '' : (gameState.firstPlayerWonLastRound == true ? 'border-green-300' : 'border-red-300')"
                    disabled>
                </selection-button>

                <selection-button
                    selection="r"
                    :class="gameState.firstPlayerWonLastRound == null ? '' : (gameState.firstPlayerWonLastRound == false ? 'border-green-300' : 'border-red-300')"
                    disabled>
                </selection-button>
            </div>
        </div>

        <div v-if="!state.playInProgress && !state.roundPlayInProgress">
            <button-outline v-if="hasGameFinished()" @click.prevent="reset">Reset game</button-outline>
            <button-outline v-else @click.prevent="play">{{ gameState.totalRounds == 0 ? 'Start Game' : 'Next Round'}}</button-outline>
        </div>

        <play-animation-board v-if="state.roundPlayInProgress"></play-animation-board>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

import game from './../composables/game';
import usernameGenerator from './../composables/usernameGenerator';
import helper from './../composables/helper';

import SelectionButton from '../components/SelectionButton.vue';
import ScoreBoard from '../components/ScoreBoard.vue';
import PlayAnimationBoard from '../components/PlayAnimationBoard.vue';
import ButtonOutline from '../components/ButtonOutline.vue';

const { gameState, resetGame, playGame, hasGameFinished } = game();
const { generateUsername } = usernameGenerator();
const { sleep, generateComputerChoice } = helper();

const state = reactive({
    firstPlayerName: '',
    secondPlayerName: '',
    roundPlayInProgress: false,
    playInProgress: false
});

onMounted(() => {
    state.firstPlayerName = generateUsername();
    state.secondPlayerName = generateUsername();
});

const reset = () => {
    state.firstPlayerName = generateUsername();
    state.secondPlayerName = generateUsername();
    state.roundPlayInProgress = false;
    state.playInProgress = false;
    resetGame();
};

const toggleAnimation = () => {
    state.roundPlayInProgress = !state.roundPlayInProgress;
}


const play = () => {
    toggleAnimation();

    state.message = '';
    state.roundPlayInProgress = true;

    setTimeout(function () {
        
        if (hasGameFinished()) return;
        // Play round
        const computerChoice = generateComputerChoice();
        playGame(computerChoice, state.firstPlayerName, state.secondPlayerName);
        
        toggleAnimation();
        sleep(3);
    }, 3000);

    state.playInProgress = false;
};
</script>