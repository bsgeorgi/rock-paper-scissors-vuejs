<template>
    <div class="flex flex-col items-center justify-center space-y-16">
        <score-board mode="pvc" :secondPlayerScore="3"></score-board>

        <div>
            <h5 class="text-white text-3xl font-bold">Something goes here! Whoop whoop!</h5>
        </div>

        <div class="flex space-x-6">
            <selection-button selection="paper"></selection-button>
            <selection-button selection="rock"></selection-button>
            <selection-button selection="scissors"></selection-button>
        </div>
    </div>


</template>

<script setup>
import SelectionButton from '../components/SelectionButton.vue';
import ScoreBoard from '../components/ScoreBoard.vue';
</script>