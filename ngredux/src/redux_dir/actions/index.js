export const CHANGE_PAYMENT_TYPE = 'CHANGE_PAYMENT_TYPE';
export const CHANGE_COMP_COVER = 'CHANGE_COMP_COVER';
export const CHANGE_RESULTS_TITLE = 'CHANGE_RESULTS_TITLE';

export function changePaymentType(name){
  return {
    type: CHANGE_PAYMENT_TYPE,
    name
  };
}
export function changeCompCover(name){
  return {
    type: CHANGE_COMP_COVER,
    name
  };
}
export function changeResultsTitle(o){
  return {
    type: CHANGE_RESULTS_TITLE,
    o
  };
}
