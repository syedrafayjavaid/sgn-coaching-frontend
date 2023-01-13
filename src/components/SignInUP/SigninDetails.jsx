import React from "react";
import {
  Box,
  FormControl,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Lock, MailOutline } from "@mui/icons-material";

const SigninDetails = () => {
  return (
    <>
      <Box paddingY={3} style={{ margin: "20px auto" }}>
        <FormControl fullWidth>
          <TextField
            required
            id="user-email"
            placeholder="your@example.com"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline />
                </InputAdornment>
              ),
            }}
            size="large"
          />
          <TextField
            required
            id="user-password"
            placeholder="your password"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
            sx={{ marginTop: 2 }}
          />

          <Link href="#" sx={{ textDecoration: "none" }}>
            <Typography
              variant="subtitle1"
              color="#007bad"
              fontWeight={700}
              textAlign="center"
              marginTop={3}
            >
              Forgot Password?
            </Typography>
          </Link>
        </FormControl>
      </Box>
    </>
  );
};

export default SigninDetails;
