<template>
    <div>
        <ul class="flex space-x-8 text-white font-bold">
            <li>
                <router-link :to="{ name: 'Index' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Statistics' }">Statistics</router-link>
            </li>
        </ul>
    </div>
</template>