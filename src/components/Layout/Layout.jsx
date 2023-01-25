import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container } from '@mui/system';

export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <AppBar
        position="static"
        style={{
          background:
            'linear-gradient(45deg, #2F4F4F,#20B2AA,	#20B2AA,	#48D1CC,#2F4F4F	)',
        }}
      >
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Navigation />
            </Typography>
            <Typography variant="h6" component="div">
              {token ? <UserMenu /> : <AuthNavigation />}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Container sx={{ mt: '2em' }}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
