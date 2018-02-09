import React from 'react';
import { Helmet } from 'react-helmet';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Pagae</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        HOME PAGe
      </article>
    );
  }
}

export default HomePage;
