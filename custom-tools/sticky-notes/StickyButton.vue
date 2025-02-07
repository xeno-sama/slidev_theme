<template>
    <div class="sticky-tools">
        <button @click="createNote" class="sticky-button px-2 py-1 rounded cursor-pointer bg-yellow-200 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666">
                <path
                    d="M200-200h360v-200h200v-360H200v560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v400L600-120H200Zm80-280v-80h200v80H280Zm0-160v-80h400v80H280Zm-80 360v-560 560Z" />
            </svg>
        </button>

        <StickyNote v-for="note in notes" :key="note.id" :id="note.id" :initial-x="note.x" :initial-y="note.y"
            :initial-content="note.content" :initial-width="note.width" :initial-height="note.height"
            @delete="deleteNote(note.id)" @update="updateNote" />
    </div>
</template>

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

<script setup>
import { useStorage } from '@vueuse/core'
import StickyNote from './StickyNote.vue'  // Changed from @/custom-tools/sticky-notes/StickyNote.vue

// Persist notes in localStorage with a unique key for this slide
const notes = useStorage('slidev-sticky-notes', [])
let noteId = useStorage('slidev-sticky-note-id', 0)

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
</script>