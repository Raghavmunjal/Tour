import { BOOK_SAVE_DETAILS } from '../constants/BookConstants'

export const bookreducer = (state = { bookingDetails: {} }, action) => {
  switch (action.type) {
    case BOOK_SAVE_DETAILS:
      return {
        ...state,
        bookingDetails: action.payload,
      }
    default:
      return state
  }
}
