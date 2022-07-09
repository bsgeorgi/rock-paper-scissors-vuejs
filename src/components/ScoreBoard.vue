<template>
    <div>
        <div class="border-4 border-white py-3 px-16 font-bold text-5xl text-white">
            <span>{{ firstPlayerScore ?? 0 }}</span>
            <span>:</span>
            <span>{{ secondPlayerScore ?? 0 }}</span>
        </div>
        <div class="absolute -mt-16 -ml-20 font-bold backdrop-blur-md bg-white/30 px-4 py-2 w-28 text-white">
            <span>{{ props.mode == 'pvc' ? 'Player' : 'Computer' }}</span>
        </div>
        <div class="absolute -mt-16 ml-44 font-bold backdrop-blur-md bg-white/30 px-4 py-2 w-28 text-white">
            <span>Computer</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    mode: String,
    firstPlayerScore: Number,
    secondPlayerScore: Number
});
</script>