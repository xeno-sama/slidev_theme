<template>
    <div class="relative rounded-lg" :class="gradient" :style="containerStyle">
        <div class="p-4">
            <h2 class="whitespace-pre-wrap" :class="titleColor" :style="{ fontSize: titleSize }">{{ title }}</h2>
            <br />
            <p class="whitespace-pre-wrap" :style="{
        color: contentColor.startsWith('text-') ? `var(--${contentColor.substring(5)})` : contentColor,
        fontSize: contentSize
    }" v-html="content"></p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    gradient: {
        type: String,
        default: 'bg-gradient-to-r from-blue-500 to-purple-500'
    },
    titleColor: {
        type: String,
        default: 'text-white'
    },
    contentColor: {
        type: String,
        default: '#ffffff'
    },
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: 'auto'
    },
    titleSize: {
        type: String,
        default: '1.5rem'
    },
    contentSize: {
        type: String,
        default: '1rem'
    }
})

const containerStyle = computed(() => ({
    width: props.width,
    height: props.height,
}))
</script>

<style scoped>
.whitespace-pre-wrap {
    white-space: pre-wrap;
}
</style>