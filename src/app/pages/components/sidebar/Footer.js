import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { AuthContext } from '../../../helpers/withAuth';
import { Footer } from './style';
import { Button } from '../button/button';

function Module({ history }) {
  const { data, client } = useContext(AuthContext);
  const onClick = () => {
    Cookies.remove('token');
    client.resetStore();
    history.push('/login');
  };
  return (
    <Footer>
      <span>{data.currentUser.email}</span>
      <Button onClick={() => onClick()} danger>
        LogOut
      </Button>
    </Footer>
  );
}

Module.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Module);
