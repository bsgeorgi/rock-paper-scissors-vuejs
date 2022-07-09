<template>
    <div class="flex">
        <span class="text-6xl mr-12 fistLeft">🤜🏻</span>
        <span class="text-6xl ml-12 fistRight">🤛🏻</span>
    </div>
</template>

<style scoped>
@keyframes fistLeft {
    0% { transform: rotate(-45deg) }
    10% { transform: rotate(-41deg) }
    20% { transform: rotate(-36deg) }
    30% { transform: rotate(-31deg) }
    40% { transform: rotate(-26deg) }
    50% { transform: rotate(-21deg) }
    60% { transform: rotate(-16deg) }
    70% { transform: rotate(-10deg) }
    80% { transform: rotate(-5deg) }
    100% { transform: rotate(0.0deg) }
}

@keyframes fistRight {
    0% { transform: rotate(45deg) }
    10% { transform: rotate(41deg) }
    20% { transform: rotate(36deg) }
    30% { transform: rotate(31deg) }
    40% { transform: rotate(26deg) }
    50% { transform: rotate(21deg) }
    60% { transform: rotate(16deg) }
    70% { transform: rotate(10deg) }
    80% { transform: rotate(5deg) }
    100% { transform: rotate(0.0deg) }
}


.fistLeft {
    transform: rotate(-45deg);
    animation-name: fistLeft;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
}

.fistRight {
    transform: rotate(45deg);
    animation-name: fistRight;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
}
</style>