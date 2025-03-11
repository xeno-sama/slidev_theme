<template>
    <div class="relative" :style="{ width, height }">
        <img class="absolute top-0 left-0 w-full h-full z-0" :class="imageObjectFitClass" :src="imagePath" alt="">
        <div class="relative z-10 p-4">
            <h2 class="whitespace-pre-wrap" :class="textColor">{{ title }}</h2>
            <br />
            <p class="whitespace-pre-wrap !important"
                :style="{ color: contentColor.startsWith('text-') ? `var(--${contentColor.substring(5)})` : contentColor }"
                v-html="content"></p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    imagePath: {
        type: String,
        required: true
    },
    imageFit: {
        type: String,
        default: 'cover',
        validator: (value) => ['contain', 'fitWidth', 'fitHeight', 'fitAll'].includes(value)
    },
    textColor: {
        type: String,
        default: 'text-blue'
    },
    contentColor: {
        type: String,
        default: '#000000'
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
        default: '100%'
    }
})

const imageObjectFitClass = computed(() => {
    switch (props.imageFit) {
        case 'contain':
            return 'object-contain'
        case 'fitWidth':
            return 'object-fill w-full h-auto'
        case 'fitHeight':
            return 'object-fill w-auto h-full'
        case 'fitAll':
            return 'object-fill'
        default:
            return 'object-cover'
    }
})
</script>

<style scoped>
.whitespace-pre-wrap {
    white-space: pre-wrap;
}
</style>