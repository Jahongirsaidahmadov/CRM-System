import {
    GET_THEME
} from "./themeTypes";

export const getTheme =(data) =>{
    return {
        type: GET_THEME,
        payload: data
    }
}