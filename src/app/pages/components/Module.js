import React from 'react';
import PropTypes from 'prop-types';

function TdModule({ loading }) {
  return loading ? (
    <td style={{ color: '#1cbfff' }}>Loading</td>
  ) : (
    <td style={{ color: 'green' }}>✔</td>
  );
}

TdModule.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default TdModule;
