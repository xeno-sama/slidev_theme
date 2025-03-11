import { ref } from 'vue'

interface Note {
    id: number
    x: number
    y: number
    content?: string
    width?: number
    height?: number
}

export function useSticky() {
    const notes = ref<Note[]>([])
    let noteId = 0

    function createNote() {
        const noteWidth = 200
        const noteHeight = 150
        const maxOffset = 50

        const centerX = 300
        const centerY = 200

        const x = centerX + (Math.random() * maxOffset * 2 - maxOffset)
        const y = centerY + (Math.random() * maxOffset * 2 - maxOffset)

        notes.value.push({
            id: noteId++,
            x,
            y,
            width: noteWidth,
            height: noteHeight,
            content: ''
        })
    }

    function deleteNote(id: number) {
        notes.value = notes.value.filter(note => note.id !== id)
    }

    return {
        notes,
        createNote,
        deleteNote
    }
}