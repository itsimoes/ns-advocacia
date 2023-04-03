// import { Button, Container, Link, Menu } from "@mui/material";
// import React from "react";
// import "./style.scss";
// import Logo1 from "../../assets/logo1.png";
// import Logo2 from "../../assets/logo2.png";
// import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <div className="navbar-wrapper">
//       <Container className="nav-container-desktop">
//         <Link to="/" className="logo">
//           <img src={Logo1} id="logo1" alt="" />
//           <img src={Logo2} id="logo2" alt="" />
//         </Link>
//         <Link to="/" className="nav-button">
//           Home
//         </Link>
//         <Link to="/" className="nav-button">
//           Sobre
//         </Link>
//         <Link to="/" className="nav-button">
//           Serviços
//         </Link>
//         <Link to="/" className="nav-button">
//           Contato
//         </Link>
//       </Container>
//       <Container className="nav-container-mobile">
//         <Button className="menu-button-mobile" >
//           <MenuIcon />
//           <Menu
//           >
//             <a id="home" className="menu-item" href="/">
//               Home
//             </a>
//             <a id="about" className="menu-item" href="/about">
//               About
//             </a>
//             <a id="contact" className="menu-item" href="/contact">
//               Contact
//             </a>
//           </Menu>
//         </Button>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { AllInclusive } from "@mui/icons-material";
import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import "./style.scss";
import { Divider, Link } from "@mui/material";

// const pages = ['Home', 'Sobre', 'Serviços', 'Contato'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="navbar-wrapper">
      <Toolbar disableGutters>
        <Container
          className="nav-container-desktop"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          <Link to="/" className="logo">
            <img src={Logo1} id="logo1" alt="" />
            <img src={Logo2} id="logo2" alt="" />
          </Link>
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/" className="nav-button">
            Sobre
          </Link>
          <Link to="/" className="nav-button">
            Serviços
          </Link>
          <Link to="/" className="nav-button">
            Contato
          </Link>
        </Container>
        <Container sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            <MenuItem onClick={handleCloseNavMenu} >
              <Typography textAlign="center" className="mobile-menu-typography" >Home</Typography>
            </MenuItem >
            <Divider  className="mobile-menu-divider" />
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" className="mobile-menu-typography" >Sobre</Typography>
            </MenuItem>
            <Divider className="mobile-menu-divider" />
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" className="mobile-menu-typography" >Serviços</Typography>
            </MenuItem>
            <Divider className="mobile-menu-divider" />
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" className="mobile-menu-typography" >Contato</Typography>
            </MenuItem>
            <Divider className="mobile-menu-divider" />
          </Menu>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
