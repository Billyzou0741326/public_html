import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "sans-serif",
        ].join(","),
    },
});

export {
    theme,
};