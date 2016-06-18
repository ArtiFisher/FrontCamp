import { combineReducers} from 'redux';
import paymentType from './changePaymentType.js';
// import compCover from './changeCompCover.js';
// import resultsTitle from './changeResultsTitle.js';

const rootReducer = combineReducers({
  // resultsTitle,
  // compCover,
  paymentType
});
export default rootReducer;
