import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { Dialpad, Flag, MailOutline, Person } from "@mui/icons-material";

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "13px",
  },
};

const SignupDetails = () => {
  return (
    <>
      <Box paddingY={3}>
        <FormControl fullWidth>
          <Typography
            variant="subtitle1"
            color="#007bad"
            fontWeight={700}
            textAlign="left"
          >
            General Information
          </Typography>
          <TextField
            id="first-name"
            placeholder="Your First Name"
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            size="large"
            sx={{ marginTop: 2 }}
          />
          <TextField
            id="last-name"
            placeholder="Your Last Name"
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: 2 }}
          />
          <FormLabel id="user-gender" sx={{ marginTop: 2, textAlign: "left" }}>
            Gender
          </FormLabel>
          <RadioGroup defaultValue="female" name="gender-radio">
            <Grid container direciton="row" marginTop={1}>
              <Grid
                item
                border={2}
                borderRadius={10}
                borderColor="#1976d2"
                paddingLeft="12px"
                marginRight={3}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  sx={{ ...formControlLabelStyle }}
                />
              </Grid>
              <Grid
                item
                border={2}
                borderRadius={10}
                borderColor="#1976d2"
                paddingLeft="12px"
                paddingLeft={2}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  sx={{ ...formControlLabelStyle }}
                />
              </Grid>
            </Grid>
          </RadioGroup>

          <Typography
            variant="subtitle1"
            color="#007bad"
            fontWeight={700}
            textAlign="left"
            marginTop={3}
          >
            Contact Details
          </Typography>
          <TextField
            id="user-email"
            placeholder="your@example.com"
            type="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline />
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: 2 }}
          />

          <TextField
            id="user-country"
            placeholder="Your Country"
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Flag />
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: 2 }}
          />
          <TextField
            id="user-number"
            placeholder="Your Contact Number"
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Dialpad />
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: 2 }}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default SignupDetails;
