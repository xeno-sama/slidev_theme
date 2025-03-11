<template>
    <div class="sticky-tools">
        <button @click="createNote" class="sticky-button px-2 py-1 rounded cursor-pointer"
            :class="[buttonColor, textColor]">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                :fill="getIconColor()">
                <path
                    d="M200-200h360v-200h200v-360H200v560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v400L600-120H200Zm80-280v-80h200v80H280Zm0-160v-80h400v80H280Zm-80 360v-560 560Z" />
            </svg>
        </button>

        <StickyNote v-for="note in notes" :key="note.id" :id="note.id" :initial-x="note.x" :initial-y="note.y"
            :initial-content="note.content" :initial-width="note.width" :initial-height="note.height"
            :color="getNoteColor()" :textColor="getTextColorValue()" @delete="deleteNote(note.id)"
            @update="updateNote" />
    </div>
</template>

<script>
import { useStorage } from '@vueuse/core'
import StickyNote from './StickyNote.vue'

export default {
    components: {
        StickyNote
    },
    props: {
        buttonColor: {
            type: String,
            default: 'bg-yellow-200'
        },
        textColor: {
            type: String,
            default: 'text-black'
        }
    },
    setup(props) {
        // Persist notes in localStorage with a unique key for this slide
        const notes = useStorage('slidev-sticky-notes', [])
        let noteId = useStorage('slidev-sticky-note-id', 0)

        function getNoteColor() {
            // Convert Tailwind class to CSS color
            if (props.buttonColor === 'bg-yellow-200') return '#feff9c'
            if (props.buttonColor === 'bg-blue-200') return '#9ce0ff'
            if (props.buttonColor === 'bg-green-200') return '#9cffce'
            if (props.buttonColor === 'bg-pink-200') return '#ff9ce0'
            return '#feff9c' // Default yellow
        }

        function createNote() {
            const noteWidth = 200
            const noteHeight = 150
            const maxOffset = 50

            const centerX = 300
            const centerY = 200

            const x = centerX + (Math.random() * maxOffset * 2 - maxOffset)
            const y = centerY + (Math.random() * maxOffset * 2 - maxOffset)

            notes.value.push({
                id: noteId.value++,
                x,
                y,
                content: '',
                width: noteWidth,
                height: noteHeight
            })
        }

        function deleteNote(id) {
            notes.value = notes.value.filter(note => note.id !== id)
        }

        function updateNote(updatedNote) {
            const index = notes.value.findIndex(note => note.id === updatedNote.id)
            if (index !== -1) {
                notes.value[index] = updatedNote
            }
        }

        function getIconColor() {
            if (props.textColor === 'text-white') return '#ffffff'
            if (props.textColor === 'text-blue-500') return '#3b82f6'
            if (props.textColor === 'text-red-500') return '#ef4444'
            return '#666666' // Default color
        }

        function getTextColorValue() {
            // Common Tailwind colors
            if (props.textColor === 'text-white') return '#ffffff'
            if (props.textColor === 'text-black') return '#000000'

            // Blues
            if (props.textColor === 'text-blue-500') return '#3b82f6'
            if (props.textColor === 'text-blue-600') return '#2563eb'
            if (props.textColor === 'text-blue-700') return '#1d4ed8'

            // Reds
            if (props.textColor === 'text-red-500') return '#ef4444'
            if (props.textColor === 'text-red-600') return '#dc2626'

            // Greens
            if (props.textColor === 'text-green-500') return '#10b981'
            if (props.textColor === 'text-green-600') return '#059669'

            // Yellows
            if (props.textColor === 'text-yellow-500') return '#eab308'
            if (props.textColor === 'text-yellow-600') return '#ca8a04'

            // Oranges
            if (props.textColor === 'text-orange-500') return '#f97316'
            if (props.textColor === 'text-orange-600') return '#ea580c'

            // Purples
            if (props.textColor === 'text-purple-500') return '#a855f7'
            if (props.textColor === 'text-purple-600') return '#9333ea'

            // Pinks
            if (props.textColor === 'text-pink-500') return '#ec4899'
            if (props.textColor === 'text-pink-600') return '#db2777'

            // Grays
            if (props.textColor === 'text-gray-500') return '#6b7280'
            if (props.textColor === 'text-gray-600') return '#4b5563'

            return '#000000' // Default black
        }

        return {
            notes,
            createNote,
            deleteNote,
            updateNote,
            getNoteColor,
            getTextColorValue,
            getIconColor
        }
    }
}
</script>

<style scoped>
.sticky-tools {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
}

.sticky-button {
    transition: transform 0.2s;
}

.sticky-button:hover {
    transform: scale(1.1);
}
</style>