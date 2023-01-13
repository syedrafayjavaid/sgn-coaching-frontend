import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Grid,
  Typography,
  Link,
  Button,
  FormControl,
  Paper,
} from "@mui/material";
import PropTypes from "prop-types";
import SigninDetails from "./SigninDetails";
import SignupDetails from "./SignupDetails";
import coachLogo from "../../assets/images/coaching-logo.png";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MergedSingInUP = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper
        sx={{ backgroundColor: "white" }}
        borderRadius={3}
        elevation={10}
        border={2}
      >
        <Grid
          container
          direction="column"
          paddingTop={4}
          paddingBottom={6}
          paddingX={10}
        >
          <Grid item marginTop={4}>
            <img
              src={coachLogo}
              alt="coaching - logo"
              style={{ width: "60%" }}
            />
          </Grid>

          <Grid item marginTop={3}>
            <Typography variant="h6" color="#333333" fontWeight={600}>
              {value === 0 ? "Welcome Back!" : "Sign Up First!"}
            </Typography>
          </Grid>

          <Grid item marginTop={3}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="merged sign in/sign up in tabs"
            >
              <Tab label="Sign In" {...a11yProps(0)} />
              <Tab label="Sign Up" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <SigninDetails />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignupDetails />
            </TabPanel>
          </Grid>

          <Grid item>
            <Typography variant="body2" color="#0000008a">
              {value === 0 ? "By signing in" : "By signing up"}, you agree
              to&nbsp;
              <Link sx={{ textDecoration: "none", color: "#000" }}>
                terms of service
              </Link>
              &nbsp;and&nbsp;
              <Link sx={{ textDecoration: "none", color: "#000" }}>
                privacy policy
              </Link>
              .
            </Typography>
          </Grid>

          <Grid item marginTop={4}>
            <FormControl fullWidth>
              <Button variant="contained">
                <Link href="#" sx={{ textDecoration: "none", color: "white" }}>
                  {value === 0 ? "Sign In" : "Sign Up"}
                </Link>
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MergedSingInUP;
