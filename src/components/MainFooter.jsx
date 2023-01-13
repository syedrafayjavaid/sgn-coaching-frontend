import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

import coachingLogo from "../assets/images/coaching-logo.png";
import appstoreImg from "../assets/images/Appstore.png";
import googleplayImg from "../assets/images/GooglePlay.png";
import faceIco from "../assets/images/facebook-circled.png";
import twitterIco from "../assets/images/twitter-circled.png";
import linkIco from "../assets/images/linkedin-circled.png";
import instaIco from "../assets/images/instagram-circled.png";

const coachingMain = [
  "why coaching.com",
  "our team",
  "careers",
  "privacy policy",
  "privacy and terms",
  "status",
];

const discover = ["find a coach", "list your practice"];

const platform = [
  "features",
  "solutions for individuals",
  "solutions for coaches",
  "solutions for business",
  "solutions for enterprise",
  "program and events",
  "marketplace",
  "integrations",
  "security",
];

const resources = [
  "knowledge base",
  "professional services",
  "live webinars",
  "recorded webinars",
  "guides",
  "blog",
  "FAQ",
];

const pricing = ["Individuals", "Coaches", "Businesses", "Enterprise"];

const MainFooter = () => {
  return (
    <>
      <Grid container direction="column" py={6} px={6}>
        {/* --- Footer top section --- */}
        <Grid item px={6}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            {/* --- Coaching maing section --- */}
            <Grid item md={4} padding={3}>
              <Grid container direction="column">
                <Grid item>
                  <img
                    src={coachingLogo}
                    alt="coaching - logo"
                    style={{ width: "40%" }}
                  />
                </Grid>
                {/* --- Coaching Main Link Items --- */}
                <Grid item marginTop={3}>
                  {coachingMain.map((coachItem) => (
                    <Typography variant="subtitle2" color="#0f0f3d">
                      <Link
                        href="/"
                        sx={{
                          textDecoration: "none",
                          color: "#0f0f3d",
                          textTransform: "capitalize",
                        }}
                      >
                        {coachItem}
                      </Link>
                    </Typography>
                  ))}
                </Grid>

                {/* --- Download App Section --- */}
                <Grid item marginTop={4}>
                  <Link href="/">
                    <img
                      src={appstoreImg}
                      alt="appstore - icon"
                      style={{ display: "inline-block", width: "30%" }}
                    />
                  </Link>

                  <Link href="/">
                    <img
                      src={googleplayImg}
                      alt="google - play - icon"
                      style={{
                        display: "inline-block",
                        width: "30%",
                        marginLeft: "15px",
                      }}
                    />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            {/* --- Discover | Platform Section --- */}
            <Grid item md={4} padding={3}>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
              >
                {/* --- Discover Section --- */}
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color="#0f0f3d"
                      >
                        Discover
                      </Typography>
                    </Grid>

                    {/* --- Dicover Link Items --- */}
                    <Grid item marginTop={3}></Grid>
                    {discover.map((discItem) => (
                      <Typography variant="subtitle2" color="#0f0f3d">
                        <Link
                          href="/"
                          sx={{
                            textDecoration: "none",
                            color: "#0f0f3d",
                            textTransform: "capitalize",
                          }}
                        >
                          {discItem}
                        </Link>
                      </Typography>
                    ))}
                  </Grid>
                </Grid>

                {/* --- Platform Section --- */}
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color="#0f0f3d"
                      >
                        Platform
                      </Typography>
                    </Grid>
                    {/* --- Platform Link Items --- */}
                    <Grid item marginTop={3}>
                      {platform.map((platItem) => (
                        <Typography variant="subtitle2" color="#0f0f3d">
                          <Link
                            href="/"
                            sx={{
                              textDecoration: "none",
                              color: "#0f0f3d",
                              textTransform: "capitalize",
                            }}
                          >
                            {platItem}
                          </Link>
                        </Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* --- Resources | Pricing - Section --- */}{" "}
            <Grid item md={4} padding={3}>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
              >
                {/* --- Resources Section --- */}
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color="#0f0f3d"
                      >
                        Resources
                      </Typography>
                    </Grid>
                    {/* --- Resources Link Items --- */}
                    <Grid item marginTop={3}>
                      {resources.map((rescItem) => (
                        <Typography variant="subtitle2" color="#0f0f3d">
                          <Link
                            href="/"
                            sx={{
                              textDecoration: "none",
                              color: "#0f0f3d",
                              textTransform: "capitalize",
                            }}
                          >
                            {rescItem}
                          </Link>
                        </Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>

                {/* --- Prcicing Section --- */}
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color="#0f0f3d"
                      >
                        Pricing
                      </Typography>
                    </Grid>
                    {/* --- Prcing Link Items --- */}
                    <Grid item marginTop={3}>
                      {pricing.map((priceItem) => (
                        <Typography variant="subtitle2" color="#0f0f3d">
                          <Link
                            href="/"
                            sx={{
                              textDecoration: "none",
                              color: "#0f0f3d",
                              textTransform: "capitalize",
                            }}
                          >
                            {priceItem}
                          </Link>
                        </Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* --- Footer lower section --- */}
        <Grid item px={8} marginTop={6}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            {/* --- Copyright Section --- */}
            <Grid item>
              <Typography variant="body2" fontWeight={500} color="#0f0f3d">
                All rights reserved ©2023 Coaching.com
              </Typography>
            </Grid>
            {/* --- Social Icons Section --- */}
            <Grid item>
              <ul>
                <li style={{ display: "inline-block" }}>
                  <Link href="/">
                    <img
                      src={faceIco}
                      alt="facebook-icon"
                      style={{ width: "25px" }}
                    />
                  </Link>
                </li>

                <li style={{ display: "inline-block" }}>
                  <Link href="/">
                    <img
                      src={twitterIco}
                      alt="twitter-icon"
                      style={{ width: "25px", marginLeft: "8px" }}
                    />
                  </Link>
                </li>

                <li style={{ display: "inline-block" }}>
                  <Link href="/">
                    <img
                      src={linkIco}
                      alt="linkedin-icon"
                      style={{ width: "25px", marginLeft: "8px" }}
                    />
                  </Link>
                </li>

                <li style={{ display: "inline-block" }}>
                  <Link href="/">
                    <img
                      src={instaIco}
                      alt="instagram-icon"
                      style={{ width: "25px", marginLeft: "8px" }}
                    />
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainFooter;
