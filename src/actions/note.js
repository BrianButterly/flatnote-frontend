
const showNote = (note) => {
    return {
        type: "SHOW_NOTE",
        note: note
    }
}

export const deleteNote = () => {
    return {
        type: "DELETE_NOTE",
    }
}

export const editNoteSuccess = (greatSuccess) => {
    return {
        type: "EDIT_NOTE_SUCCESS", 
        note: greatSuccess
    }
}

export default showNote