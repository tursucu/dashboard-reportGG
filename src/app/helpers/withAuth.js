/* eslint-disable object-curly-newline */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENT_USER } from '../queries';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const { data, loading, refetch, client } = useQuery(GET_CURRENT_USER);
  if (loading) {
    return null;
  }
  return (
    <AuthContext.Provider
      value={{
        data,
        loading,
        refetch,
        client,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
