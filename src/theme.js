import { cyan } from '@material-ui/core/colors';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: cyan[500],
    },
  },
});

export default theme