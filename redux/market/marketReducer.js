import axios from 'axios'
import { holdings } from '../../constants/dummy'
import { getHoldingsRequest } from './index'
import { getHoldingsSuccess } from './index'
import { getHoldingsFailure } from './index'

export const getHolding = (
  holdings = [],
  currency = 'usd',
  orderBy = 'market_cap_desc',
  sparkline = true,
  priceChangePerc = '7d'
) => {
  return (dispatch) => {
    dispatch(getHoldingsRequest())
    let ids = holdings
      .map((item) => {
        return item.id
      })
      .join(',')
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`

    axios
      .get(url)
      .then((res) => {
        if (res.state == 200) {
          //Massage data
        } else {
            dispatch(getHoldingsFailure(res.data))
        }
      })
      .catch((err) => {
        dispatch(getHoldingsFailure(err))
      })
  }
}
