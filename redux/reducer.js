const LOADING = 'LOADING'
const ADD_LIST = 'ADD_LIST'

const initialState = {
    loading: false,
    list: []
}

export const loading = (boolean) => {
    return {
        type: LOADING,
        payload: {
            loading: boolean
        }
    }
}

export const addList = (data) => {
    return {
        type: ADD_LIST,
        payload: {
            list: data
        }
    }
}

export default reducer = (state = [], action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: action.payload.loading}
        case ADD_LIST: 
            return {
                ...state, 
                list:[...state.list, action.payload.list]
            }

        default:
            return state
    }
    
}