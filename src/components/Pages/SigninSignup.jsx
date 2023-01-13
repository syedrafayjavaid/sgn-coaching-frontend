import React from "react";
import MergedSingInUP from "../SignInUP/MergedSingInUP";
import { Grid } from "@mui/material";

const SigninSignup = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        textAlign="center"
        sx={{
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid item md={5}>
          <MergedSingInUP />
        </Grid>
      </Grid>
    </>
  );
};

export default SigninSignup;
