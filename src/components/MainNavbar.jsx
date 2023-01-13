import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import coachingLogo from "../assets/images/coaching-logo.png";

const pages = ["coaching platform", "find a coach", "pricing", "login"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MainNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ px: 2 }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo for large displays */}
            <Link
              component="a"
              href="/"
              sx={{
                mr: 3,
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
              }}
            >
              <img
                src={coachingLogo}
                style={{ width: "100%", maxWidth: "250px", height: "auto" }}
              />
            </Link>

            {/* Menu for large displays */}
            {/* <Box sx={{ flexGrow: 0 }}> */}
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Typography variant="subtitle1" my={3}>
                <Link
                  href={'#'}
                  sx={{
                    textDecoration: "none",
                    color: "#1d1d51",
                    mx: 3,
                    paddingTop: 1,
                    textTransform: "capitalize",
                    fontWeight: 600,
                  }}
                >
                  coaching platform
                </Link>
              </Typography>
              <Typography variant="subtitle1" my={3}>
                <Link
                  href={'/coaches'}
                  sx={{
                    textDecoration: "none",
                    color: "#1d1d51",
                    mx: 3,
                    paddingTop: 1,
                    textTransform: "capitalize",
                    fontWeight: 600,
                  }}
                >
                  find a coach
                </Link>
              </Typography>
              <Typography variant="subtitle1" my={3}>
                <Link
                  href={'#'}
                  sx={{
                    textDecoration: "none",
                    color: "#1d1d51",
                    mx: 3,
                    paddingTop: 1,
                    textTransform: "capitalize",
                    fontWeight: 600,
                  }}
                >
                  Coaches
                </Link>
              </Typography>
              <Typography variant="subtitle1" my={3}>
                <Link
                  href={'#'}
                  sx={{
                    textDecoration: "none",
                    color: "#1d1d51",
                    mx: 3,
                    paddingTop: 1,
                    textTransform: "capitalize",
                    fontWeight: 600,
                  }}
                >
                  pricing
                </Link>
              </Typography>
              <Typography variant="subtitle1" my={3}>
                <Link
                  href={'#'}
                  sx={{
                    textDecoration: "none",
                    color: "#1d1d51",
                    mx: 3,
                    paddingTop: 1,
                    textTransform: "capitalize",
                    fontWeight: 600,
                  }}
                >
                  login
                </Link>
              </Typography>


              <Button
                sx={{ color: "white", my: 3, ml: 2, borderRadius: 5 }}
                variant="contained"
              >
                get started
              </Button>
            </Box>

            {/* Logo for small displays */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              coaching.com - LOGO
            </Typography>

            {/* Menu for Small displays */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default MainNavbar;
