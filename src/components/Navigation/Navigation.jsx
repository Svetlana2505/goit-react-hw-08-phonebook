import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { StyledLink, List, Item } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <List>
        <Item>
          <StyledLink to="/">Home</StyledLink>
        </Item>
        {token && (
          <li>
            <StyledLink to="contacts">Contacts</StyledLink>
          </li>
        )}
      </List>
    </nav>
  );
};
