import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookreducer } from './reducers/bookreducer'
const reducer = combineReducers({
  book: bookreducer,
})

const BookingDetailsFromStorage = localStorage.getItem('bookingDetails')
  ? JSON.parse(localStorage.getItem('bookingDetails'))
  : {}

const intialState = {
  book: {
    bookingDetails: BookingDetailsFromStorage,
  },
}

const middleware = [thunk]
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
