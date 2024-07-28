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
import { Theme } from "@mui/material";
import { usePathname } from "next/navigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Image from "next/image";
import ModifiedLink from "../shared/ModifiedLink";
import { headerItems } from "@/config/navigation";

function Header() {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#ffffff",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "#000" }}
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
                color: (theme: Theme) => theme.palette.text.primary,
                display: { xs: "block", md: "none" },
              }}
            >
              {headerItems.map((page) => (
                <ModifiedLink
                  key={page.link}
                  href={page.link}
                >
                  <MenuItem
                    key={page.label}
                    onClick={handleCloseNavMenu}
                    sx={{ color: (theme: Theme) => theme.palette.text.primary }}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </ModifiedLink>
              ))}
            </Menu>
          </Box>
          <ModifiedLink
            href={"/"}
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: "1%",
              left: 0,
              width: 110,
              height: 120,
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              },
            }}
          >
            <Image
              src={"/logo.png"}
              width={110}
              height={120}
              alt=""
              priority
              style={{
                marginRight: 8,
                objectFit: "contain",
              }}
            />
          </ModifiedLink>

          <List
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 0,
              flexShrink: 0,
              paddingLeft: "140px",
            }}
            dense
          >
            {headerItems.map((page) => (
              <ListItem
                key={page.label}
                disablePadding
              >
                <ListItemButton
                  href={page.link}
                  selected={pathname.includes(page.link)}
                  sx={{
                    my: 2,
                    mr: 4,
                    backgroundColor: "transparent",
                    color: (theme: Theme) => theme.palette.text.primary,
                    textTransform: "uppercase",
                    letterSpacing: "0.1rem",
                    borderRadius: "0px",
                    borderBottom: `2px solid ${pathname.includes(page.link) ? "#d89196" : "transparent"}`,
                    transition: "border-bottom-color 0.3s ease",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderBottomColor: "#d89196",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {page.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
