import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

function Copyright() {
  return (
    <Typography variant="body2" className="footer">
      Copyright ©<a href="https://material-ui.com/"> Abhedya</a>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    // backgroundColor: "#0e102c",
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[400]
    //     : theme.palette.grey[800],
  },

  footer_link: {
    listStyleType: "none",
    textDecoration: "none"
  }
  
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Divider />

      <footer className={classes.footer}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={6}
            sm={3}
            style={{
              paddingLeft: "2%",
              color: "#7777",
            }}
          >
            <img src="logo.png" />
            <p>
              Praesent dapibus, neque id cursus ucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat.
            </p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ul className={classes.footer_link}>
              <strong>Useful Links</strong>

              <li>
                <a href="/#">About Molla</a>
              </li>
              <li>
                <a href="/#"> How to shop on Molla</a>
              </li>
              <li>
                <a href="/#">FAQ</a>
              </li>
              <li>
                <a href="/#">Contact us</a>
              </li>
              <li>
                <a href="/#">Log in</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ul className={classes.footer_link}>
              <strong>Customer Service</strong>

              <li>
                <a href="/#">Payment Methods</a>
              </li>
              <li>
                <a href="/#"> Money-back guarantee!</a>
              </li>
              <li>
                <a href="/#">Returns</a>
              </li>
              <li>
                <a href="/#">Shipping</a>
              </li>
              <li>
                <a href="/#">Terms and conditions</a>
              </li>
              <li>
                <a href="/#"> Privacy Policy</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ul className={classes.footer_link}>
              <strong>My Account</strong>

              <li>
                <a href="/#">Sign In</a>
              </li>
              <li>
                <a href="/#">View Cart</a>
              </li>
              <li>
                <a href="/#">My Wishlist</a>
              </li>
              <li>
                <a href="/#">Track My Order</a>
              </li>
              <li>
                <a href="/#">Help </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </footer>
      <Divider variant="middle" />
      <Copyright />
    </div>
  );
}
