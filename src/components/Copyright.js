import { Typography} from '@material-ui/core';

const Copyright = () => {
    return (
      <Typography variant="body2" color="white" align="center" fontFamily="Arial Black">
        {'Copyright © Carson Fischl, '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Copyright;