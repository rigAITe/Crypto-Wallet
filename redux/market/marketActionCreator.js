import { GET_HOLDINGS_REQUEST } from "./index"
import { GET_HOLDINGS_SUCCESS } from "./index"
import { GET_HOLDINGS_FAILURE } from "./index"

//Holding / My Holdings

export const getHoldingsRequest = () => {
    return {
        type: GET_HOLDINGS_REQUEST
    }
}

export const getHoldingsSuccess = (data) => {
    return {
        type: GET_HOLDINGS_SUCCESS,
        payload: data
    }
}

export const getHoldingsFailure = (error) => {
    return {
        type: GET_HOLDINGS_FAILURE,
        payload: error
    }
}

// Coin Market
