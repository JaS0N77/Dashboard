import React from "react";
import {
    AppBar,
    Button,
    Grid,
    Box,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./images/logo.png";
import { btnPageStyle } from "./style";
import { Link } from "react-router-dom";

const pages = [
    { id: "1", title: "Головна сторінка", url: "/" },
    { id: "2", title: "Користувачі", url: "user" },
    { id: "3", title: "Персонажі", url: "characters" },
    { id: "4", title: "Сторінка 3", url: "/" },
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const user = window.localStorage.getItem("user");

    // navmenu
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        // sx === style
        <AppBar position="static">
            <Grid container sx={{ alignItems: "center", height: "100px" }}>
                <Grid
                    item
                    xs={2}
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        {pages.map((page) => (
                            <Link key={page.id} to={page.url}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </Grid>
                <Grid
                    item
                    xs={7}
                    sx={{
                        justifyContent: "start",
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <Link to="/">
                        <img width={150} src={logo} alt="image" />
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={2}
                    sx={{
                        textAlign: "center",
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <Link to="/">
                        <img width={150} src={logo} alt="image" />
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={7}
                    sx={{
                        justifyContent: "space-evenly",
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    {pages.map((page) => (
                        <Link key={page.id} to={page.url}>
                            <Button sx={btnPageStyle}>{page.title}</Button>
                        </Link>
                    ))}
                </Grid>
                <Grid item xs={3} sx={{ textAlign: "end", pr: 3 }}>
                    <Box>
                        {user === null ? (
                            <>
                                <Link to="/signin">
                                    <Button sx={{ color: "black" }}>
                                        Увійти
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button sx={{ color: "black" }}>
                                        Зареєструватися
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <Button sx={{ color: "black" }}>Профіль</Button>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Navbar;
