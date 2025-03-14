<template>
    <button @click="handleClick"
        class="rounded cursor-pointer text-white hover:opacity-80 fixed flex items-center justify-center overflow-hidden p-0.5"
        :class="[buttonColor, positionClasses]" :style="{ width: width, height: height }">
        <div class="flex items-center justify-center w-full h-full px-1">
            <template v-if="imagePosition === 'left'">
                <div class="h-full flex items-center justify-center p-0">
                    <img :src="imageSrc" :style="imageStyle" />
                </div>
                <span :class="textColor" :style="{ fontSize: textSize }" class="flex-grow px-3">{{ buttonText }}</span>
            </template>
            <template v-else>
                <span :class="textColor" :style="{ fontSize: textSize }" class="flex-grow px-3">{{ buttonText }}</span>
                <div class="h-full flex items-center justify-center p-0">
                    <img :src="imageSrc" :style="imageStyle" />
                </div>
            </template>
        </div>
    </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    slideNumber: {
        type: Number,
        required: true
    },
    buttonText: {
        type: String,
        default: 'Navigate'
    },
    buttonColor: {
        type: String,
        default: 'bg-blue-500'
    },
    width: {
        type: String,
        default: 'auto'
    },
    height: {
        type: String,
        default: 'auto'
    },
    textSize: {
        type: String,
        default: '14px'
    },
    textColor: {
        type: String,
        default: 'text-white'
    },
    position: {
        type: String,
        default: 'right_bottom',
        validator: (value) => ['left_top', 'left_bottom', 'right_top', 'right_bottom'].includes(value)
    },
    imagePosition: {
        type: String,
        default: 'left',
        validator: (value) => ['left', 'right'].includes(value)
    },
    imageSrc: {
        type: String,
        required: true
    }
})

const positionClasses = computed(() => {
    switch (props.position) {
        case 'left_top':
            return 'top-4 left-4'
        case 'left_bottom':
            return 'bottom-4 left-4'
        case 'right_top':
            return 'top-4 right-4'
        case 'right_bottom':
            return 'bottom-4 right-4'
    }
})

const imageStyle = computed(() => ({
    height: '100%',
    width: 'auto',
    objectFit: 'contain',
    display: 'block'
}))

function handleClick() {
    $slidev.nav.go(props.slideNumber)
}
</script>