import { SET_TRADE_MODAL_VISIBILITY } from "./tabAction"

export const setVisibility = () => {
    return {
        type: SET_TRADE_MODAL_VISIBILITY,
    }
}

// export const executeVisibility = () => {
//     return (dispatch) => {
//         dispatch(setVisibility())
//     }
// }
