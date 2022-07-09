<template>
    <button class="w-24 h-24 rounded-full border-4 border-white transition delay-100 scale-100 hover:scale-125 backdrop-blur-md bg-white/20">
        <span class="text-4xl">{{ emoji }}</span>
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    selection: String
});

const emoji = ref('');

/* Get the corresponding emoji depending on what prop selection has been passed */
const getEmojiToDisplay = () => {
    switch (props.selection) {
        case 'paper':
        case 'p':
            emoji.value = '✋🏻';
            break;
        case 'rock':
        case 'r':
            emoji.value = '✊🏻';
            break;
        default:
            emoji.value = '✌🏻';
            break;
    }
}

onMounted(() => {
  getEmojiToDisplay();
});
</script>