<template>
    <button @mousedown="handleMouseDown" @mouseup="handleMouseUp" @click="handleClick"
        class="px-2 py-1 rounded cursor-pointer text-white hover:opacity-80 fixed"
        :style="{ left: x + 'px', top: y + 'px' }" :class="buttonColor">
        <template v-if="direction === 'left'">
            ◀ {{ buttonText }}
        </template>
        <template v-else-if="direction === 'right'">
            {{ buttonText }} ▶
        </template>
        <template v-else-if="direction === 'up'">
            ▲ {{ buttonText }}
        </template>
        <template v-else>
            {{ buttonText }} ▼
        </template>
    </button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    slideNumber: {
        type: Number,
        required: true
    },
    buttonText: {
        type: String,
        default: 'Navigate'
    },
    direction: {
        type: String,
        default: 'right',
        validator: (value) => ['left', 'right', 'up', 'down'].includes(value)
    },
    buttonColor: {
        type: String,
        default: 'bg-blue-500'
    },
    initialX: {
        type: Number,
        default: 20
    },
    initialY: {
        type: Number,
        default: 20
    }
})

const x = ref(props.initialX)
const y = ref(props.initialY)
const pressTimer = ref(null)
const isDragging = ref(false)

function handleMouseDown(e) {
    pressTimer.value = setTimeout(() => {
        isDragging.value = true
        startDrag(e)
    }, 200) // 200ms delay for long press
}

function handleMouseUp() {
    clearTimeout(pressTimer.value)
}

function handleClick(e) {
    if (!isDragging.value) {
        $slidev.nav.go(props.slideNumber)
    }
    isDragging.value = false
}

function startDrag(e) {
    const initialX = e.clientX - x.value
    const initialY = e.clientY - y.value

    function onMouseMove(e) {
        x.value = e.clientX - initialX
        y.value = e.clientY - initialY
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
}
</script>