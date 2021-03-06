import { fromJS } from 'immutable';

import * as types from './ListingDetailPage.constants';

const initialState = fromJS({
  data: {},
  loading: true,
  error: false,
  expandMobile: false,
  openSuccessViewingDialog: false,
  openOfferModal: false,
  roomatesFound: {},
  garantorsFound: {},
});

function lisitingDetailReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LISTING_DETAIL:
      return state
        .set('loading', true);
    case types.GET_LISTING_DETAIL_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false);
    case types.GET_LISTING_DETAIL_ERROR:
      return state
        .set('error', action.err)
        .set('loading', false);
    case types.SUBMIT_SCHEDULE_VIEWING_SUCCESS:
      return state
        .set('openSuccessViewingDialog', !state.get('openSuccessViewingDialog'));
    case types.TOGGLE_VIEWING_MOBILE:
      return state
        .set('expandMobile', !state.get('expandMobile'));
    case types.TOGGLE_OFFER_MODAL:
      return state
        .set('openOfferModal', !state.get('openOfferModal'))
        .set('roomatesFound', {})
        .set('garantorsFound', {});
    case types.TOGGLE_VIEWING_SUCCESS_DIALOG:
      return state
        .set('openSuccessViewingDialog', !state.get('openSuccessViewingDialog'))
        .set(
          'expandMobile',
          state.get('expandMobile') && state.get('openSuccessViewingDialog')
          ? false
          : state.get('expandMobile')
        );
    case types.GET_USER_BY_EMAIL_SUCCESS:
      if (action.personType === 'roomate') {
        return state
          .set('roomatesFound', { ...state.get('roomatesFound'), [action.index]: !action.data.length ? false : action.data[0] });
      }
      return state
          .set('garantorsFound', { ...state.get('garantorsFound'), [action.index]: !action.data.length ? false : action.data[0] });
    case types.SUBMIT_OFFER_SUCCESS:
      return state
        .set('openOfferModal', !state.get('openOfferModal'))
        .set('roomatesFound', {})
        .set('garantorsFound', {});
    default:
      return state;
  }
}

export default lisitingDetailReducer;
