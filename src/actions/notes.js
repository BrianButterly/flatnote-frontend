export const fetchNotesSuccess = (notes) => {
    return {
        type: 'FETCH_NOTES_SUCCESS', 
        notes: notes
    }
}

export const createNote = (note) => {
    return {
        type: 'CREATE_NOTE',
        note: note
    }
}