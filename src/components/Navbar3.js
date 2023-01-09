import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import PricingSection from "components/PricingSection";
import Footer4 from "components/Footer4";
import { useAuth } from "util/auth";
import { useDarkMode } from "util/theme";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 98,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar3(props) {
  const classes = useStyles();

  const auth = useAuth();
  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link href="/">
              <a>
                <img src={logo} alt="Logo" className={classes.logo} />
              </a>
            </Link>
            <div className={classes.spacer} />
            <Hidden mdUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown={true} implementation="css">
              <Link href="/writing" passHref={true}>
                <Button component="a" color="inherit">
                  Writing
                </Button>
              </Link>
              <Link href="/coaching" passHref={true}>
                <Button component="a" color="inherit">
                  Coaching
                </Button>
              </Link>
              <Link href="/books" passHref={true}>
                <Button component="a" color="inherit">
                  BOOKS
                </Button>
              </Link>

              {!auth.user && (
                <>
                  <Link href="/auth/signin" passHref={true}>
                    <Button component="a" color="inherit">
                      Sign in
                    </Button>
                  </Link>
                  <Box component="span" ml={1}>
                    <Link href="/auth/signup" passHref={true}>
                      <Button component="a" variant="contained" color="primary">
                        Sign up
                      </Button>
                    </Link>
                  </Box>
                </>
              )}

              {auth.user && (
                <>
                  <Button
                    color="inherit"
                    aria-label="Account"
                    aria-controls="account-menu"
                    aria-haspopup="true"
                    onClick={(event) => {
                      handleOpenMenu(event, "account-menu");
                    }}
                  >
                    Account
                    <ExpandMoreIcon className={classes.buttonIcon} />
                  </Button>
                  <Menu
                    id="account-menu"
                    open={
                      menuState && menuState.id === "account-menu"
                        ? true
                        : false
                    }
                    anchorEl={menuState && menuState.anchor}
                    getContentAnchorEl={undefined}
                    onClick={handleCloseMenu}
                    onClose={handleCloseMenu}
                    keepMounted={true}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <div>
                      <Link href="/dashboard" passHref={true}>
                        <MenuItem component="a">Dashboard</MenuItem>
                      </Link>
                      <Link href="/settings/general" passHref={true}>
                        <MenuItem component="a">Settings</MenuItem>
                      </Link>
                      <Divider />
                      <MenuItem
                        onClick={(event) => {
                          auth.signout();
                        }}
                      >
                        Signout
                      </MenuItem>
                    </div>
                  </Menu>
                </>
              )}

              <IconButton
                color="inherit"
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
              >
                {darkMode.value && <NightsStayIcon />}

                {!darkMode.value && <WbSunnyIcon />}
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          <Link href="/about" passHref={true}>
            <ListItem component="a" button={true}>
              <ListItemText>About</ListItemText>
            </ListItem>
          </Link>
          <Link href="/faq" passHref={true}>
            <ListItem component="a" button={true}>
              <ListItemText>Pricing</ListItemText>
            </ListItem>
          </Link>
          <Link href="/about" passHref={true}>
            <ListItem component="a" button={true}>
              <ListItemText>Books</ListItemText>
            </ListItem>
          </Link>

          {!auth.user && (
            <>
              <Link href="/auth/signin" passHref={true}>
                <ListItem component="a" button={true}>
                  <ListItemText>Sign in</ListItemText>
                </ListItem>
              </Link>
              <ListItem>
                <Link href="/auth/signup" passHref={true}>
                  <Button component="a" variant="contained" color="primary">
                    Sign up
                  </Button>
                </Link>
              </ListItem>
            </>
          )}

          {auth.user && (
            <>
              <Link href="/dashboard" passHref={true}>
                <ListItem component="a" button={true}>
                  <ListItemText>Dashboard</ListItemText>
                </ListItem>
              </Link>
              <Link href="/settings/general" passHref={true}>
                <ListItem component="a" button={true}>
                  <ListItemText>Settings</ListItemText>
                </ListItem>
              </Link>
              <Divider />
              <ListItem
                button={true}
                onClick={(event) => {
                  auth.signout();
                }}
              >
                <ListItemText>Sign out</ListItemText>
              </ListItem>
            </>
          )}

          <ListItem>
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
            >
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
      <PricingSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Shall we get started? "
        subtitle="From developing the fundamental strategy down to the discipline of execution"
      />
      <Footer4
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        description="Business and Brand Strategist, Writer and Coach"
        copyright={`© ${new Date().getFullYear()} Buzzedison`}
        logo="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
        logoInverted="https://buzzedison.com/wp-content/uploads/2022/12/1.png"
        sticky={true}
      />
    </Section>
  );
}

export default Navbar3;
