import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

const lightTheme = createTheme({
    palette: {
        primary: {
            light: red[100],
            main: red[300],
            dark: red[600],
        },
        secondary: {
            light: green[200],
            main: "#798897",
            dark: green[800],
        }
    },
});

export default lightTheme;
