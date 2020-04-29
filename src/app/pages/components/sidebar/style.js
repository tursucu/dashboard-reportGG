/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  background: #0b0c1b;
  position: fixed;
`;

export const Logo = styled.div`
  display: flex;
  padding: 24px 18px 18px 18px;
  justify-content: center;
  align-items: center;
  div {
    border-bottom: 1px solid #9193a8;
    flex: 1;
    display: flex;
    justify-content: center;
    svg {
      width: 131px;
      height: 40px;
      fill: #ffffff;
    }
  }
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: block;
  fill: #9193a8;
  transform: rotate(90deg);
  transition: transform 3s;
`;

export const Text = styled.span`
  margin-left: 16px;
  flex: 1;
  color: #9193a8;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 1px;
  margin-right: -1px;
`;

export const MenuItem = styled.div`
  padding: 0 8px;
  flex: 1;
  a {
    border: 0;
    border-radius: 4px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    margin-right: 0;
    &:hover {
      ${Text} {
        color: #ffffff;
      }
      ${Icon} {
        fill: #ffffff;
      }
    }
    ${(props) => props.selected
      && css`
        background: #373940;
      `}
    div {
      display: flex;
      align-items: center;
    }
  }
  ${Text} {
    ${(props) => props.selected
      && css`
        color: #ffffff;
      `}
  }
  ${Icon} {
    ${(props) => props.selected
      && css`
        fill: #ffffff;
        transform: rotate(0deg);
        transition: transform 3s;
      `}
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding: 10px 20px;
  span{
    color:#fff;
    margin-bottom:10px;
  }
`;
