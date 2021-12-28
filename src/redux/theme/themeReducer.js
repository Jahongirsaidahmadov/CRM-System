import  {
    GET_THEME
} from "./themeTypes";

const initialState = {
    theme_data: false
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_THEME:
            return {
                ...state,
                theme_data: action.payload
            }
        default: return state
    }
}

export default themeReducer