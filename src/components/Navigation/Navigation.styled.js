import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: #2f4f4f;
  text-decoration: none;
  font-size: 18px;

  &.active {
    color: #00ff00;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 10px;
`;
