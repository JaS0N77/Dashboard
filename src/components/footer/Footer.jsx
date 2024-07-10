import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Container, useTheme } from "@mui/material";
import Copyright from "../copyright/Copyright";

const Footer = () => {
    const theme = useTheme();

    return (
        <Box
            bgcolor={theme.palette.primary.light}
            sx={{
                position: "relative",
                bottom: 0,
                textAlign: "center",
                width: "100%",
            }}
            maxWidth="fluid"
        >
            <Typography variant="body1">
                Dashboard footer
            </Typography>
            <Copyright />
        </Box>
    );
};

export default Footer;
