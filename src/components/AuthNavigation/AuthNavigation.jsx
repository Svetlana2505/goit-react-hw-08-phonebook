import { StyledLink } from './AuthNavigation.styled';
import Box from '@mui/material/Box';

export const AuthNavigation = () => {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
    >
      <StyledLink to="register">Sign Up</StyledLink>
      <StyledLink to="login">Login</StyledLink>
    </Box>
  );
};
