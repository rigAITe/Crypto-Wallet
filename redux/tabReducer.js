import { SET_TRADE_MODAL_VISIBILITY } from "./tabAction"

const initialState = {
  isTradeModalVisible: true,
}

export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRADE_MODAL_VISIBILITY:
      return {
          ...state,
        isTradeModalVisible: !state.isTradeModalVisible,
      }
    default:
      return state
  }
}
