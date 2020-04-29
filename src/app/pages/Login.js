/* eslint-disable react/prop-types */

/* eslint-disable comma-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';
import { GET_LOGIN_USER } from '../queries';
import { AuthContext } from '../helpers/withAuth';
import {
  ErrorText,
  Wrapper,
  FormContainer,
  FormGroup,
  Label,
  Input,
  Button,
} from '../components/login/Wrapper';

function Login({ history }) {
  const [loginUser, { error: mutationError }] = useMutation(GET_LOGIN_USER);
  const { refetch } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    loginUser({
      variables: { email: email.value, password: password.value },
    })
      .then(
        async ({ data }) => {
          Cookies.set('token', data.signIn.token);
          await refetch();
          history.push('/');
        },
        () => {}
      )
      .catch();
  };

  return (
    <Wrapper>
      <FormContainer>
        <FormGroup onSubmit={handleLogin}>
          <Label htmlFor="email">Email Address</Label>
          <Input type="text" name="email" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" />
          <Button type="submit">Login</Button>
        </FormGroup>
        {mutationError && (
          <ErrorText>
            {mutationError.graphQLErrors.map((err, i) => (
              <span key={i}>{err.message}</span>
            ))}
          </ErrorText>
        )}
      </FormContainer>
    </Wrapper>
  );
}

export default withRouter(Login);
