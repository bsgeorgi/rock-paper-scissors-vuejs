<template>
    <div class="mt-40 flex flex-col items-center justify-center space-y-12">
        <div class="flex flex-col space-y-3">
            <span class="text-5xl font-bold text-white">Hey 👋</span>
            <span class="text-3xl font-medium text-white">Please choose your game mode:</span>
        </div>
        <!-- Game mode container start -->
        <div class="flex flex-col space-y-8">
            <button-outline
                class="capitalize"
                @click.prevent="router.push({ name: 'PlayerVsComputer' })">
                Play against computer
            </button-outline>
            <button-outline
                class="capitalize"
                @click.prevent="router.push({ name: 'ComputerVsComputer' })">
                computer VS computer
            </button-outline>
        </div>
        <!-- Game mode container end -->
    </div>
</template>

<script setup>
import ButtonOutline from '../components/ButtonOutline.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>