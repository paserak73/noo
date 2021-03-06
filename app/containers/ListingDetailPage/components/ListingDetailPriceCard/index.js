import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import { currencies } from 'constants/backend-constants';
import { defaultViewingTimes } from 'config/index';
import { required } from 'constants/validation';
import moment from 'moment';
import _ from 'lodash';

import {
  SelectField,
  DatePicker,
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import MenuItem from 'material-ui/MenuItem';
import MakeOfferModal from '../ListingDetailMakeOffer/index';

import { Wrap, SmallWrap, IconButtonWrap, Price, H5, DateInputWrap, Fbmobile, FlatButtonWrap, Rbmobile, Rbweb, Fbweb } from './styles';

// TODO add validation notEmpty()
// TODO take into acccount blocked times
// TODO when not loged show login screen
// TODO fix graphical issues, test mobile

class ListingDetailPriceCard extends React.Component {
  constructor() {
    super();
    this.state = { submitError: false };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { viewingForm } = this.props;
    if (viewingForm.data && viewingForm.time) {
      this.setState({ submitError: true });
    } else {
      this.props.handleSubmitViewing();
    }
  };
  render() {
    const {
      handleToggleViewingSuccessDialog,
      muiTheme,
      data,
      expandMobile,
      openSuccessViewingDialog,
      handleToggleViewingMobile,
      handleToggleOfferModal,
      openOfferModal,
    } = this.props;

    return (
      <Wrap expandMobile={expandMobile}>
        <SmallWrap expandMobile={expandMobile}>
          <IconButtonWrap expandMobile={expandMobile}>
            <IconButton onClick={handleToggleViewingMobile}>
              <CloseIcon />
            </IconButton>
          </IconButtonWrap>
          <Price expandMobile={expandMobile}>
            ‎<span><strong>{data.price} {currencies[data.currency]}</strong> per month</span> <br /> <p>35 bids</p>
          </Price>
          <H5 expandMobile={expandMobile}>Select date and time</H5>
          <form onSubmit={this.handleSubmit}>
            <DateInputWrap expandMobile={expandMobile}>
              <Field
                name="date"
                component={SelectField}
                hintText="Date"
                validate={required}
                style={{ width: '100%' }}
                errorText={this.state.submitError ? 'Cannot be empty ' : ''}
              >
                {_.times(7, (index) => (
                  <MenuItem
                    value={moment().add(index, 'days').format('dddd, MMMM DD')}
                    primaryText={moment().add(index, 'days').format('dddd, MMMM DD')}
                    key={index}
                  />
                ))}
              </Field>
              <Field
                name="time"
                component={SelectField}
                hintText="Time"
                validate={required}
                style={{ width: '100%' }}
              >
                {defaultViewingTimes.map((item) =>
                  <MenuItem value={item} primaryText={item} key={item} />
                )}
              </Field>
            </DateInputWrap>
            <Fbmobile expandMobile={expandMobile}>
              <FlatButtonWrap>
                <FlatButton primary label="Offer" onClick={handleToggleOfferModal} />
              </FlatButtonWrap>
            </Fbmobile>
            <Rbmobile expandMobile={expandMobile}>
              <RaisedButton primary label={expandMobile ? 'Schedule viewing' : 'Viewing'} labelStyle={{ color: 'white' }} onClick={expandMobile ? handleToggleViewingSuccessDialog : handleToggleViewingMobile} />
            </Rbmobile>
            <Rbweb>
              <RaisedButton type="submit" primary label="Schedule viewing" fullWidth labelStyle={{ color: 'white' }} />
            </Rbweb>
            <Fbweb>
              <FlatButtonWrap muiTheme={muiTheme} >
                <FlatButton primary fullWidth label="Submit offer" onClick={handleToggleOfferModal} />
              </FlatButtonWrap>
            </Fbweb>
          </form>
        </SmallWrap>
        <Dialog
          title="Your viewing request is on it’s way."
          actions={
            <FlatButton
              label="OK"
              primary
              onClick={handleToggleViewingSuccessDialog}
            />
          }
          modal={false}
          contentStyle={{ width: '340px' }}
          titleStyle={{ color: 'rgba(0,0,0,.7)', fontSize: '18px', fontWeight: '500' }}
          open={openSuccessViewingDialog}
          onRequestClose={handleToggleViewingSuccessDialog}
        >
          I will let you know once confirmed.
          Your can view and edit the viewing in your ACTIVITY page.
        </Dialog>
        <MakeOfferModal
          openOfferModal={openOfferModal}
          handleToggleOfferModal={handleToggleOfferModal}
        />
      </Wrap>
    );
  }
}

ListingDetailPriceCard.propTypes = {
  muiTheme: PropTypes.object,
  data: PropTypes.object,
  handleSubmitViewing: PropTypes.func,
  expandMobile: PropTypes.bool,
  openSuccessViewingDialog: PropTypes.bool,
  handleToggleViewingMobile: PropTypes.func,
  handleToggleViewingSuccessDialog: PropTypes.func,
  handleToggleOfferModal: PropTypes.func,
  openOfferModal: PropTypes.bool,
  viewingForm: PropTypes.object,
};

export default muiThemeable()(
  reduxForm({
    form: 'scheduleViewingListing',
  })(ListingDetailPriceCard));
