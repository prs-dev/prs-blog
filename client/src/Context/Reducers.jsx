export const initialState = {
    loading: false,
    user: null,
    error: null
}

export const userReducer = (state, action) => {
    switch(action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'LOADING_SUCCESS':
            return {
                ...state,
                loading: false
            }
        case 'SUCCESS':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case "FAILURE":
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}