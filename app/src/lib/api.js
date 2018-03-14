import fetch from '../api/mock'
import {RESERVE_SUCCESS, RESERVE_OUT_OF_STOCK, RESERVE_ERROR} from '../constants/api'

export const reserveItem = ({urn, quantity}) => {
    return fetch(
        'https://example.com/-/v1/stock/reserve',
        {
            method: 'POST',
            body: {
                urn,
                quantity,
            }
        }
    )
    .then(response => {
        switch(response.status) {
            case 204: return RESERVE_SUCCESS
            case 418: return RESERVE_OUT_OF_STOCK
            case 500: return RESERVE_ERROR
            default:
                throw new Error('[API reserveItem] Not handled response status')
        }
    })
    .catch(console.error)
}
