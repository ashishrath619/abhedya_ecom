import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import "./cartpage.css";
import { Qtyctrl } from "./Qty";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import Button from "@material-ui/core/Button";
import Appbar from "./Appbar";
import Listcart from "./listcart";
import Footer from "./Footer";
import CachedIcon from "@material-ui/icons/Cached";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));
//////
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function FullWidthGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Appbar />

      <img className="cart_banner" src="page-header-bg.jpg" width="100%" />

      <Grid container>
        <Grid item xs={12}>
          <div className="bread_crumbs">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link color="inherit" href="/" onClick={handleClick}>
                Home
              </Link>
              <Link
                color="inherit"
                href="/getting-started/installation/"
                onClick={handleClick}
              >
                Shop
              </Link>
              <Typography color="textPrimary">Shopping Cart</Typography>
            </Breadcrumbs>
          </div>
          <Divider style={{ color: "#f9f9f9" }} />
        </Grid>

        <Grid className="produid_grid" item xs={12} sm={8}>
          <Listcart />
          <Divider />

          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className="coupan_code">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder="coupon code"
                  size="small" // onChange={handleChange('weight')}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  variant="outlined"
                  edge="end"
                >
                  <ArrowRightAltOutlinedIcon />
                </IconButton>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="update_btn">
                <Button variant="outlined">
                  Update Cart <CachedIcon />
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container>
            <Grid item xs={12} md={10}>
              <Paper className="paperdiv">
                <div style={{ backgroundColor: "#ecf0f1" }}>
                  <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <h4>Cart Total</h4>
                        <Divider variant="middle" />
                      </Grid>

                      <Grid item xs={6}>
                        <h4>Sub Total:</h4>
                        <Divider />
                      </Grid>
                      <Grid item xs={6}>
                        <h4>12544Rs</h4>
                        <Divider />
                      </Grid>

                      <Grid item xs={12}>
                        <h4>Shipping:</h4>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={12} sm={6}>
                            <FormControl component="fieldset">
                              {/* <FormLabel component="legend">Gender</FormLabel> */}
                              <RadioGroup
                                aria-label="gender"
                                name="Free Shipping"
                                value={value}
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  value="Standard"
                                  control={<Radio />}
                                  label="Standard"
                                />
                                <FormControlLabel
                                  value="Express"
                                  control={<Radio />}
                                  label="Express"
                                />
                                <FormControlLabel
                                  value="other"
                                  control={<Radio />}
                                  label="Other"
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>

                          <Grid item xs={6} sm={3}>
                            <p>80Rs</p>
                            <p>100Rs</p>
                          </Grid>
                        </Grid>
                        <Divider variant="middle" />
                      </Grid>

                      <Grid item xs={6} sm={6}>
                        <h4>Mayur Vihar Block C-2 New Delhi</h4>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <div className="change_addbtn">
                          <Button variant="outlined" size="small" fullWidth>
                            Change Address
                          </Button>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <h4>Total</h4>
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <h4>1200Rs</h4>
                      </Grid>
                      <div className="checkout_button">
                        <Button variant="outlined" size="small" fullWidth>
                          Process to CheckOut
                        </Button>
                      </div>
                    </Grid>
                  </div>
                </div>
              </Paper>
            </Grid>
            <div className="continue_shoping_button">
              <Button variant="outlined" size="sm">
                Continue Shopping
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
