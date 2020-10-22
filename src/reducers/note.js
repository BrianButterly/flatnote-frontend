
const note = (state = [], action) => {
    switch(action.type) {
        case "SHOW_NOTE": 
            return action.note
        case "DELETE_NOTE":
            return []
        case "EDIT_NOTE_SUCCESS":
            return action.note    
        default:
            return state    
    }
}

export default note 