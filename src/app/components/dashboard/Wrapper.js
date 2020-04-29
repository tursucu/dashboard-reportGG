import styled from 'styled-components';
import device from '../../styles/_device';

export const Wrapper = styled.div`
  display: flex;
  background-color: #eaeaea;
`;

export const Main = styled.div`
  display: flex;
  padding: 20px;
  flex: 1;
  background: #212539;
  flex-direction: column;
  margin-left: 250px;
  min-width: calc(100% - 250px);
  min-height: calc(100vh);
  @media ${device.tablet} {
    margin-left: 80px;
    min-width: calc(100% - 80px);
  }
`;
export const WrapContainer = styled.div`
  display: flex;
  background: rgba(11, 12, 27, 0.5);
  border-radius: 3px;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`;
export const Head = styled.span`
  color: #fff;
  font-size: 21px;
`;

export const SelectContainer = styled.form`
  display: flex;
  flex-direction: row;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  &:nth-child(1) {
    margin-left: 0;
  }
  &:last-child {
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  align-self: center;
  color: #fff;
`;

export const Button = styled.button`
  font-size: 14px;
  align-self: center;
  justify-self: flex-end;
  padding: 7px 14px;
  background: transparent;
  color: #9193a8;
  border: 1px solid #9193a8;
  border-radius: 3px;
  &:hover {
    color: #fff;
    border-color: #fff;
  }
  &:disabled {
    color: aqua;
    border-color: aqua;
  }
`;

export const Select = styled.select`
  border: 1px solid #000;
`;
