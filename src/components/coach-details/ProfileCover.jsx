import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import servaneDP from "../../assets/images/DP-Servane Mouazan.png";
import linkedinPng from "../../assets/images/linkedin-in.png";

const ProfileCover = ({ data }) => {

  const userData = data[0];

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{ background: "#5e1de1", marginTop: 5, borderRadius: 2 }}
      >
        {/* --- Coach Image --- */}
        <Grid item md={3} p={5} sx={{ display: "flex", position: "relative" }}>
          <img
            src={servaneDP}
            style={{
              position: "absolute",
              top: 50,
              borderRadius: "100%",
              border: "2px solid #fff",
              width: "70%",
              marginLeft: 8,
            }}
          />
        </Grid>

        {/* --- Coach Name & Highlights --- */}
        <Grid item md={9} paddingTop={3} paddingBottom={1}>
          <Grid container direction="column">
            {/* --- Coach Highlights Upper Section --- */}
            <Grid item>
              <Grid container direction="row" justifyContent="space-between">
                {/* --- Coach Name Section --- */}
                <Grid item md={9} p={3}>
                  <Grid container direction="row">
                    <Grid item>
                      <Typography variant="h4" color="white" fontWeight={600}>
                        {userData && userData.firstName && userData.lastName ? `${userData.firstName} ${userData.lastName}` : ""}
                      </Typography>
                    </Grid>
                    <Grid item marginLeft={2}>
                      <img
                        src={linkedinPng}
                        alt="linkedin-png"
                        style={{
                          padding: 15,
                          borderRadius: "100%",
                          background: "white",
                        }}
                      />
                    </Grid>
                    {userData?.socialLinks?.map((item, key) => {

                    })}
                  </Grid>
                </Grid>

                {/* --- Coach Schedule Inteview Section --- */}
                <Grid item md={3} p={3}>
                  <Button variant="contained" startIcon={<DateRange />}>
                    schedule interview
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* --- Coach Highlights Upper Section --- */}
            <Grid item p={3}>
              <Grid container direction="row">
                <Grid
                  item
                  marginRight={3}
                  border={1}
                  borderColor="white"
                  borderRadius={5}
                  paddingY={1}
                  paddingX={2}
                >
                  <Typography
                    variant="subtitle2"
                    color="white"
                    fontWeight={700}
                    textTransform="capitalize"
                  >
                    corporate / organizational
                  </Typography>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileCover;
