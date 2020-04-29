/* eslint-disable react/prop-types */

/* eslint-disable comma-dangle */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Wrapper, Main } from '../components/dashboard/Wrapper';
import SideBar from './components/sidebar/index';

function Dashboard() {
  return (
    <Wrapper>
      <SideBar selected="dashboard" />
      <Main>Dashboard</Main>
    </Wrapper>
  );
}

export default withRouter(Dashboard);
