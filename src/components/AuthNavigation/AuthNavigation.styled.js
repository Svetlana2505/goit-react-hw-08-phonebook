import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #2f4f4f;
  text-decoration: none;
  font-size: 18px;

  &.active {
    color: #00ff00;
  }
`;
