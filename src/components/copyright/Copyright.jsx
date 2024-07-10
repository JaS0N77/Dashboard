import React from "react";
import { Typography } from "@mui/material";

const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary">
            {`Copyright © Your Website ${new Date().getFullYear()}.`}
        </Typography>
    );
};

export default Copyright;
