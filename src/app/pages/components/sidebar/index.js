/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Sidebar({ selected }) {
  return (
    <Wrapper>
      <Header />
      <Main selected={selected} />
      <Footer />
    </Wrapper>
  );
}

Sidebar.propTypes = {
  selected: PropTypes.string.isRequired,
};
export default Sidebar;
