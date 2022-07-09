<template>
    <div class="flex flex-col items-center justify-center space-y-16">
        <div>
            <div class="border-4 border-white py-3 px-16 font-bold text-5xl text-white">
                <span>0</span>
                <span>:</span>
                <span>0</span>
            </div>
            <div class="absolute -mt-16 -ml-20 font-bold backdrop-blur-md bg-white/30 px-4 py-2 w-28 text-white">
                <span>Player</span>
            </div>
            <div class="absolute -mt-16 ml-44 font-bold backdrop-blur-md bg-white/30 px-4 py-2 w-28 text-white">
                <span>Computer</span>
            </div>
        </div>

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
</script>