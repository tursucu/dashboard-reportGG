import styled from 'styled-components';
import device from '../../styles/_device';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #0f0f10;
  position: relative;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 25px;
  border-radius: 6px;
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  width: 347px;
  @media ${device.mobileL} {
    width: 300px;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: #000;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #e3e3e3;
  background-color: #ffffff;
  height: 50px;
  color: #000;
  border-radius: 6px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  background-color: #4c84ff;
  margin-top: 15px;
  height: 50px;
  color: #ffffff;
`;

export const ErrorText = styled.div`
  align-self: center;
  span {
    font-size: 12px;
    color: red;
  }
`;
