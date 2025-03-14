<template>
    <div class="relative rounded-lg bg-gradient-to-r" :class="[`from-${gradientStart} to-${gradientEnd}`, sizeClass]"
        :style="containerStyle" ref="container" @mousedown="handleMouseDown" @touchstart="handleTouchStart">
        <!-- Resize handle (bottom-right only) -->
        <div class="resize-handle-invisible bottom-right" @mousedown.stop="startResize('bottom-right')"
            @touchstart.stop="startResize('bottom-right')"></div>
        <div :class="padding || 'p-4'">
            <h2 class="whitespace-pre-wrap" :class="[titleColor, textAlignment]" :style="{ fontSize: titleSize }">{{
            title }}</h2>
            <br />
            <p class="whitespace-pre-wrap" :style="{
            color: contentColor.startsWith('text-') ? `var(--${contentColor.substring(5)}) !important` : `${contentColor} !important`,
            fontSize: contentSize
        }" :class="textAlignment" v-html="content"></p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    gradientStart: {
        type: String,
        default: 'blue-500'
    },
    gradientEnd: {
        type: String,
        default: 'purple-500'
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
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large', 'custom'].includes(value)
    },
    minWidth: {
        type: String,
        default: '200px'
    },
    minHeight: {
        type: String,
        default: '100px'
    },
    titleSize: {
        type: String,
        default: '1.5rem'
    },
    contentSize: {
        type: String,
        default: '1rem'
    },
    initialX: {
        type: Number,
        default: 50
    },
    initialY: {
        type: Number,
        default: 50
    },
    textAlignment: {
        type: String,
        default: 'text-left',
        validator: (value) => ['text-left', 'text-center', 'text-justify'].includes(value)
    },
    padding: {
        type: String,
        default: 'p-4'
    }
})

const container = ref(null)
const position = ref({ x: props.initialX, y: props.initialY })
const isDragging = ref(false)
const isResizing = ref(false)
const resizeHandle = ref(null)
const offset = ref({ x: 0, y: 0 })
const dimensions = ref({
    width: window.innerWidth * 0.3, // Start with 30% of window width
    height: parseInt(props.height) || 200
})

const sizeClass = computed(() => '')

const containerStyle = computed(() => ({
    position: 'absolute',
    left: `${position.value.x}px`,
    top: `${position.value.y}px`,
    width: `${dimensions.value.width}px`,
    height: `${dimensions.value.height}px`,
    minWidth: props.minWidth,
    minHeight: props.minHeight,
    zIndex: (isDragging.value || isResizing.value) ? 100 : 10,
    cursor: isDragging.value ? 'move' : 'default'
}))

const handleMouseDown = (event) => {
    if (!event.target.classList.contains('resize-handle')) {
        startDrag(event)
    }
}

const handleTouchStart = (event) => {
    if (!event.target.classList.contains('resize-handle')) {
        startDrag(event)
    }
}

const startDrag = (event) => {
    isDragging.value = true

    const clientX = event.clientX || (event.touches && event.touches[0].clientX)
    const clientY = event.clientY || (event.touches && event.touches[0].clientY)

    offset.value = {
        x: clientX - position.value.x,
        y: clientY - position.value.y
    }

    document.addEventListener('mousemove', onDrag)
    document.addEventListener('touchmove', onDrag)
    document.addEventListener('mouseup', stopDrag)
    document.addEventListener('touchend', stopDrag)
}

const onDrag = (event) => {
    if (!isDragging.value) return

    const clientX = event.clientX || (event.touches && event.touches[0].clientX)
    const clientY = event.clientY || (event.touches && event.touches[0].clientY)

    position.value = {
        x: clientX - offset.value.x,
        y: clientY - offset.value.y
    }
}

const stopDrag = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('touchmove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
    document.removeEventListener('touchend', stopDrag)
}

const startResize = (handle) => {
    if (handle !== 'bottom-right') return
    isResizing.value = true
    resizeHandle.value = handle
    document.addEventListener('mousemove', onResize)
    document.addEventListener('touchmove', onResize)
    document.addEventListener('mouseup', stopResize)
    document.addEventListener('touchend', stopResize)
}

const onResize = (event) => {
    if (!isResizing.value) return

    const clientX = event.clientX || (event.touches && event.touches[0].clientX)
    const clientY = event.clientY || (event.touches && event.touches[0].clientY)
    const rect = container.value.getBoundingClientRect()

    let newWidth = dimensions.value.width
    let newHeight = dimensions.value.height
    let newX = position.value.x
    let newY = position.value.y

    if (resizeHandle.value.includes('right')) {
        newWidth = clientX - rect.left
    } else if (resizeHandle.value.includes('left')) {
        const deltaX = rect.left - clientX
        newWidth = rect.width + deltaX
        newX = position.value.x - deltaX
    }

    if (resizeHandle.value.includes('bottom')) {
        newHeight = clientY - rect.top
    } else if (resizeHandle.value.includes('top')) {
        const deltaY = rect.top - clientY
        newHeight = rect.height + deltaY
        newY = position.value.y - deltaY
    }

    // Apply minimum height constraint only
    const minHeight = 100
    newHeight = Math.max(minHeight, newHeight)

    dimensions.value = {
        width: newWidth,
        height: newHeight
    }
    position.value = {
        x: newX,
        y: newY
    }
}

const stopResize = () => {
    isResizing.value = false
    resizeHandle.value = null
    document.removeEventListener('mousemove', onResize)
    document.removeEventListener('touchmove', onResize)
    document.removeEventListener('mouseup', stopResize)
    document.removeEventListener('touchend', stopResize)
}

onMounted(() => {
    position.value = { x: props.initialX, y: props.initialY }
})

onBeforeUnmount(() => {
    stopDrag()
    stopResize()
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('touchmove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
    document.removeEventListener('touchend', stopDrag)
})
</script>

<style scoped>
.resize-handle-invisible {
    position: absolute;
    width: 20px;
    height: 20px;
    z-index: 20;
    opacity: 0;
}

.bottom-right {
    bottom: 0;
    right: 0;
    cursor: se-resize;
}

.whitespace-pre-wrap {
    white-space: pre-wrap;
}

.cursor-move {
    cursor: move;
}
</style>