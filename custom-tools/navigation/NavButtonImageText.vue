<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
    slideNumber: {
        type: Number,
        required: true
    },
    buttonText: {
        type: String,
        default: 'Next'
    },
    buttonColor: {
        type: String,
        default: 'bg-blue-500'
    },
    width: {
        type: String,
        default: '200px'
    },
    height: {
        type: String,
        default: '50px'
    },
    textSize: {
        type: String,
        default: '16px'
    },
    textColor: {
        type: String,
        default: 'text-white'
    },
    imagePosition: {
        type: String,
        default: 'left',
        validator: (value: string) => ['left', 'right'].includes(value)
    },
    imageSrc: {
        type: String,
        required: true
    },
    initialX: {
        type: Number,
        default: 50
    },
    initialY: {
        type: Number,
        default: 50
    }
})

const x = ref(props.initialX)
const y = ref(props.initialY)
const isDragging = ref(false)

const buttonStyle = computed(() => ({
    width: props.width,
    height: props.height,
    cursor: 'move'
}))

const imageStyle = computed(() => ({
    height: '100%',
    width: 'auto',
    objectFit: 'contain' as const,
    display: 'block' // Ensures proper block display
}))

const textStyle = computed(() => ({
    fontSize: props.textSize
}))

const handleClick = (e: MouseEvent) => {
    // Only navigate if we're not dragging
    if (!isDragging.value) {
        navigateToSlide()
    }
    isDragging.value = false
}

// Separate navigation function to reuse for both click and touch
const navigateToSlide = () => {
    const event = new CustomEvent('nav', { detail: { slideTo: props.slideNumber } })
    window.dispatchEvent(event)
}

// Add touch event handlers
const handleTouchStart = (e: TouchEvent) => {
    isDragging.value = true

    const touch = e.touches[0]
    const initialX = touch.clientX - x.value
    const initialY = touch.clientY - y.value

    let moved = false

    function onTouchMove(e: TouchEvent) {
        const touch = e.touches[0]
        x.value = touch.clientX - initialX
        y.value = touch.clientY - initialY
        moved = true
    }

    function onTouchEnd() {
        isDragging.value = false
        document.removeEventListener('touchmove', onTouchMove)
        document.removeEventListener('touchend', onTouchEnd)

        // If didn't move much, treat as a tap and navigate
        if (!moved) {
            navigateToSlide()
        }
    }

    document.addEventListener('touchmove', onTouchMove)
    document.addEventListener('touchend', onTouchEnd)
}

const startDrag = (e: MouseEvent) => {
    isDragging.value = true

    const initialX = e.clientX - x.value
    const initialY = e.clientY - y.value

    function onMouseMove(e: MouseEvent) {
        x.value = e.clientX - initialX
        y.value = e.clientY - initialY
    }

    function onMouseUp() {
        isDragging.value = false
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
}
</script>

<template>
    <div :style="{
        position: 'fixed',
        left: `${x}px`,
        top: `${y}px`,
        zIndex: 9999,
    }" @mousedown="startDrag" @click="handleClick" @touchstart="handleTouchStart">
        <div :class="[buttonColor, 'flex items-center rounded-lg shadow-lg hover:opacity-90 transition-opacity']"
            :style="buttonStyle">
            <template v-if="imagePosition === 'left'">
                <div class="h-full flex items-center justify-center p-0">
                    <img :src="imageSrc" :style="imageStyle" />
                </div>
                <span :class="textColor" :style="textStyle" class="flex-grow px-3">{{ buttonText }}</span>
            </template>
            <template v-else>
                <span :class="textColor" :style="textStyle" class="flex-grow px-3">{{ buttonText }}</span>
                <div class="h-full flex items-center justify-center p-0">
                    <img :src="imageSrc" :style="imageStyle" />
                </div>
            </template>
        </div>
    </div>
</template>