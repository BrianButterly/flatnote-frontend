const initialState = []
const notes = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_NOTES_SUCCESS":
            return [...action.notes]
            case "CREATE_NOTE":
                return [...state, action.note]
        default:
            return state
    }
}
export default notes

 