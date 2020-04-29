import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  border: 2px solid #9193a8;
  width: 90%;
  padding: 1em 3em;
  font-weight: bold;
  color: #9193a8;
  font-size: 14px;
  border-radius: 100px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.04);
    color: #fff;
    border-color: #fff;
  }
`;

export default Button;
