import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Avatar, Typography } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// assets
import avatar from 'assets/images/avatar.png';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mt:1.5 }}>
        <Avatar alt="profile user" src={avatar} sx={{ width: 32, height: 32 }} />
        <Stack>
          <Typography variant="h6">許禎芸</Typography>
          <Typography variant="body2" color="textSecondary">
            愛與話語
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
