<template>
    <div class="sticky-note" :style="{
        left: x + 'px',
        top: y + 'px',
        width: width + 'px',
        height: height + 'px',
        background: color || '#feff9c'
    }" @mousedown="startDrag">
        <div class="note-header">
            <button @click.stop="$emit('delete')" class="delete-btn" :style="{ color: textColor }">×</button>
        </div>
        <textarea v-model="content" @input="$emit('update', { id: id, content, x, y, width, height })"
            placeholder="Введите заметку..." :style="{ color: textColor + ' !important' }"></textarea>
        <div class="resize-handle" @mousedown.stop="startResize"
            :style="{ background: `linear-gradient(135deg, transparent 50%, ${textColor} 50%)` }"></div>
    </div>
</template>

<style scoped>
.sticky-note {
    position: fixed;
    min-width: 50px;
    min-height: 30px;
    background: #feff9c;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.resize-handle {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 15px;
    height: 15px;
    cursor: se-resize;
    background: linear-gradient(135deg, transparent 50%, #666 50%);
    border-radius: 0 0 5px 0;
}

textarea {
    width: calc(100% - 10px);
    height: calc(100% - 45px);
    border: none;
    background: transparent;
    resize: none;
    font-family: inherit;
    color: #000 !important;
}

.note-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
}

.delete-btn {
    background: none;
    border: none;
    color: #666;
    font-size: 18px;
    cursor: pointer;
    padding: 0 5px;
}

.delete-btn:hover {
    color: #000;
}
</style>

<script>
export default {
    props: {
        id: Number,
        initialX: { type: Number, default: 100 },
        initialY: { type: Number, default: 100 },
        initialContent: { type: String, default: '' },
        initialWidth: { type: Number, default: 200 },
        initialHeight: { type: Number, default: 150 },
        color: { type: String, default: '#feff9c' },
        textColor: { type: String, default: '#000000' }
    },
    data() {
        return {
            x: this.initialX,
            y: this.initialY,
            width: this.initialWidth,
            height: this.initialHeight,
            content: this.initialContent
        }
    },
    watch: {
        x() { this.emitUpdate() },
        y() { this.emitUpdate() },
        width() { this.emitUpdate() },
        height() { this.emitUpdate() }
    },
    methods: {
        emitUpdate() {
            this.$emit('update', {
                id: this.id,
                content: this.content,
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            })
        },
        startDrag(e) {
            if (e.target.classList.contains('delete-btn') ||
                e.target.classList.contains('resize-handle')) return

            const initialX = e.clientX - this.x
            const initialY = e.clientY - this.y

            const onMouseMove = (e) => {
                this.x = e.clientX - initialX
                this.y = e.clientY - initialY
            }

            const onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove)
                document.removeEventListener('mouseup', onMouseUp)
            }

            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', onMouseUp)
        },
        startResize(e) {
            e.stopPropagation()
            const initialWidth = this.width
            const initialHeight = this.height
            const initialX = e.clientX
            const initialY = e.clientY

            const onMouseMove = (e) => {
                const dx = e.clientX - initialX
                const dy = e.clientY - initialY
                this.width = Math.max(50, initialWidth + dx)  // Changed from 200 to 50
                this.height = Math.max(30, initialHeight + dy)  // Changed from 150 to 30
            }

            const onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove)
                document.removeEventListener('mouseup', onMouseUp)
            }

            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', onMouseUp)
        }
    }
}
</script>