import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
import FavoritePage from 'containers/FavoritePage/Loadable';
import ListingDetailPage from 'containers/ListingDetailPage/Loadable';
import ListPropertyPage from 'containers/ListPropertyPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ProfileSettingsPage from 'containers/ProfileSettingsPage/Loadable';
import ActivityPage from 'containers/ActivityPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import CreateAccountPage from 'containers/CreateAccountPage/Loadable';
import Header from 'components/Header';
import Sidemenu from 'components/Sidemenu';
import Notifications from 'containers/Notifications';
import SnackBar from 'components/SnackBar';
import ConfirmDialog from 'components/ConfirmDialog';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #F1F1F1;
  padding-top: 60px;
  overflow: hidden;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        defaultTitle="Nookpad"
        titleTemplate="%s - Nookpad"
      >
        <meta name="description" content="Nookpad - matching tenants and landlords" />
      </Helmet>
      <Notifications />
      <Header />
      <Sidemenu />
      <SnackBar />
      <ConfirmDialog />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/listing-detail" component={ListingDetailPage} />
        <Route path="/favorite-properties" component={FavoritePage} />
        <Route path="/list-property" component={ListPropertyPage} />
        <Route path="/profile-settings" component={ProfileSettingsPage} />
        <Route path="/activity" component={ActivityPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/create-account" component={CreateAccountPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
