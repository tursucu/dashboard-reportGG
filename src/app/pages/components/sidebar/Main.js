import React from 'react';
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MenuItem, Icon, Text } from './style';

const menuData = [
  {
    id: 1,
    select: 'dashboard',
    name: 'Dashboard',
    to: '/',
  },
  {
    id: 2,
    select: 'league',
    name: 'League',
    to: '/league',
  },
];

function Module({ selected }) {
  return (
    <SimpleBar
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        minHeight: '300px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      <ul>
        {menuData.map((x) => (
          <li key={x.id}>
            <MenuItem selected={x.select === selected}>
              <Link to={x.to}>
                <div>
                  <Icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="512pt"
                      viewBox="0 0 512 512"
                      width="512pt"
                    >
                      <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />
                    </svg>
                  </Icon>
                  <Text>{x.name}</Text>
                </div>
              </Link>
            </MenuItem>
          </li>
        ))}
      </ul>
    </SimpleBar>
  );
}

Module.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default Module;
