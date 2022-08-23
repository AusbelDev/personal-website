import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { SiLinkedin, SiInstagram, SiTwitter, SiGithub } from "react-icons/si";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TbSocial } from "react-icons/tb";
// import CodeIcon from "@mui/icons-material/Code";
// import { NearMeDisabledTwoTone } from "@mui/icons-material";

const pages = ["About Me", "Projects", "Contact Me"];
// const socials = ["Instagram", "Twitter", "LinkedIn", "GitHub"];
const name = "<Λ>";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/ausbeldev/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/AusbelDev",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/marcos-rrh/",
  },
  {
    name: "GitHub",
    url: "https://github.com/AusbelDev",
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ justifyContent: "center", background: "transparent" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters id="back-to-top-anchor">
          {/* <CodeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Ubuntu Mono, monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {name}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <CodeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Ubuntu Mono, monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {name}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              // <a href={`#${page}`} key={page}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Kanit, sans-serif",
                }}
                href={`#${page}`}
              >
                {page}
              </Button>
              // </a>
            ))}
          </Box>

          {!useMediaQuery("(min-width:600px)") ? (
            <Box
              sx={{
                flexGrow: 0,
              }}
            >
              <Tooltip title="Open socials">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, fontSize: "3vh" }}
                >
                  {/* <Avatar
                    alt="Remy Sharp"
                    src="https://w1.pngwing.com/pngs/196/853/png-transparent-react-logo-javascript-stack-overflow-front-and-back-ends-github-freecodecamp-redux-computer-software.png"
                  /> */}
                  <TbSocial />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {socials.map((social) => (
                  <MenuItem key={social.name} onClick={handleCloseUserMenu}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#d4cdcd",
                        textDecoration: "none",
                      }}
                    >
                      <Typography textAlign="center">{social.name}</Typography>
                    </a>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 0,
                fontSize: "3.5vh",
                // justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/marcos-rrh/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#d4cdcd",
                  marginRight: "20px",
                }}
              >
                <span>
                  <SiLinkedin title="LinkedIn" />
                </span>
              </a>
              <a
                href="https://github.com/AusbelDev"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#d4cdcd",
                  marginRight: "20px",
                }}
              >
                <span>
                  <SiGithub title="GitHub" />
                </span>
              </a>
              <a
                href="https://instagram.com/ausbeldev"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#d4cdcd",
                  marginRight: "20px",
                }}
              >
                <span>
                  <SiInstagram title="Instagram" />
                </span>
              </a>
              <a
                href="https://twitter.com/AusbelDev"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#d4cdcd",
                }}
              >
                <span>
                  <SiTwitter title="Twitter" />
                </span>
              </a>
            </Box>
          )}
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
