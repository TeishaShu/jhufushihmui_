import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Avatar,Typography } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// assets
import avatar1 from 'assets/images/users/avatar-1.png';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1.25} alignItems="center">
        <Avatar alt="profile user" src={avatar1} sx={{ width: 32, height: 32 }} />
        <Stack>
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body2" color="textSecondary">
            UI/UX Designer
          </Typography>
        </Stack>
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
