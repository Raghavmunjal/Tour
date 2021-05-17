import { BOOK_SAVE_DETAILS } from '../constants/BookConstants'

export const saveBookingDetails = (data) => (dispatch) => {
  dispatch({
    type: BOOK_SAVE_DETAILS,
    payload: data,
  })
  localStorage.setItem('bookingDetails', JSON.stringify(data))
}
