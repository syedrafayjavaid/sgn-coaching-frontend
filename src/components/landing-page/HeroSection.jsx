import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import bgBanner from "../../assets/images/lp-banner-bg.jpg";

const HeroSection = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          padding: 6,
          backgroundImage: `url(${bgBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid item md={5} my={9} paddingLeft={6}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography
                variant="h2"
                textTransform="capitalize"
                color="white"
                fontWeight={800}
              >
                the all-in-one desitnation for professional coaching
              </Typography>
            </Grid>

            <Grid item mt={4}>
              <Typography variant="h6" color="white" fontWeight={600}>
                Our platform allows you to manage, track & measure coaching, and
                to learn from the best professional coaching programs.
              </Typography>
            </Grid>

            <Grid item mt={4}>
              {/* <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              > */}
              <Button
                variant="contained"
                sx={{ borderRadius: 5, marginRight: 2, fontWeight: 600 }}
              >
                our platform
              </Button>

              <Button
                variant="contained"
                sx={{
                  borderRadius: 5,
                  background: "#ffffff",
                  color: "#752eef",
                  marginLeft: 2,
                  fontWeight: 500,
                }}
              >
                see features
              </Button>
              {/* </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
