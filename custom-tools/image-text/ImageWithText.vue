<template>
    <div class="relative w-full h-full">
        <img class="absolute top-0 left-0 w-full h-full object-cover -z-1" :src="imagePath" alt="">
        <div class="relative z-10 p-4" :class="textColor">
            <h2 class="whitespace-pre-wrap">{{ title }}</h2>
            <br />
            <p class="whitespace-pre-wrap" v-html="content"></p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    imagePath: {
        type: String,
        required: true
    },
    textColor: {
        type: String,
        default: 'text-black'
    },
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    }
})
</script>