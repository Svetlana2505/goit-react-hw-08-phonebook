import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';
import { selectName, selectIsLoading } from '../../redux/auth/auth-selectors';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Box, Text } from './UserMenu.styled';
import { Chip } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Box>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{name[0]}</Avatar>
      <Text>{`Добро пожаловать, ${name}!`}</Text>

      <Chip
        label={
          isLoading ? (
            <CircularProgress size={20} style={{ color: 'white' }} />
          ) : (
            'Logout'
          )
        }
        onClick={() => dispatch(logout())}
      />
    </Box>
  );
};
