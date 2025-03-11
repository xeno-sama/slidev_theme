<template>
    <button @click="handleClick"
        class="rounded cursor-pointer text-white hover:opacity-80 fixed flex items-center justify-center overflow-hidden p-0.5"
        :class="[buttonColor, positionClasses]" :style="{ width: width, height: height }">
        <div class="flex items-center justify-center w-full h-full px-1">
            <template v-if="isLeftPosition">
                <span :style="{ fontSize: arrowSize }">◀</span>
                <span class="ml-0.5" :style="{ fontSize: textSize }">{{ buttonText }}</span>
            </template>
            <template v-else>
                <span :style="{ fontSize: textSize }">{{ buttonText }}</span>
                <span class="ml-0.5" :style="{ fontSize: arrowSize }">▶</span>
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
    arrowSize: {
        type: String,
        default: '12px'
    },
    position: {
        type: String,
        default: 'right_bottom',
        validator: (value) => ['left_top', 'left_bottom', 'right_top', 'right_bottom'].includes(value)
    }
})

const isLeftPosition = computed(() => props.position.startsWith('left'))

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

function handleClick() {
    $slidev.nav.go(props.slideNumber)
}
</script>