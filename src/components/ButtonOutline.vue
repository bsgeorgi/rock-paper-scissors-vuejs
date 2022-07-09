<template>
    <button class="lined transition-opacity duration-300 ease-out opacity-75 hover:opacity-100">
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    align-self: center;
    background: transparent;
    padding: 8px 16px;
    transition: all 0.5s ease;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 1px;
    outline: none;
    box-shadow: 20px 38px 34px -26px rgba(255, 255, 255, .2);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
}
button.lined {
    border: solid 7px #fff;
}
</style>