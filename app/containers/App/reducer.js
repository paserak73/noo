import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOGIN_SUCCESS } from 'containers/LoginPage/LoginPage.constants';
import * as types from './constants';

// The initial state of the App
const initialState = fromJS({
  sideMenuOpen: false,
  user: false,
  /* user: {
    id: 1,
    email: 'email@email.com',
    password: '12345',
    firstName: 'Petr',
    lastName: 'Morong',
    company: 'Nookpad',
    picture: 'https://www.caaspeakers.com/wp-content/uploads/sites/3/2012/12/VaynerchukG_headshot_web1-330x360.jpg',
    phoneNumber: '+420737212314',
    phoneVerified: true,
    emailVerified: true,
    identityVerified: true,
    paymentMethod: 'String',
    payeeMethod: 'string',
  }, */
  openConfirmDialog: false,
  dataConfirmDialog: {},
  checkingToken: true,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIDE_MENU_TOGGLE:
      return state
        .set('sideMenuOpen', !state.get('sideMenuOpen'));
    case LOCATION_CHANGE:
      return state
        .set('sideMenuOpen', false);
    case LOGIN_SUCCESS:
      return state
        .set('user', action.user)
        .set('checkingToken', false);
    case types.NO_USER_FOUND:
      return state
        .set('checkingToken', false);
    case types.USER_SIGN_OUT:
      return state
        .set('user', false);
    case types.TOGGLE_CONFIRM_DIALOG:
      return state
        .set('dataConfirmDialog', state.get('openConfirmDialog') ? {} : action.data)
        .set('openConfirmDialog', !state.get('openConfirmDialog'));
    default:
      return state;
  }
}

export default appReducer;
