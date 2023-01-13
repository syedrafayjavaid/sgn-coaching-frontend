import {
  AccessTime,
  ArrowForwardIos,
  LocationOn,
  Person,
} from "@mui/icons-material";
import { Box, Button, Card, Chip, Grid, Link, Typography } from "@mui/material";
import React from "react";
import mahastiImg from "../../assets/images/mahasti-image.jpg";
import { useNavigate } from "react-router-dom";

const CoachCard = (props) => {

  const { coachData } = props;

  const navigate = useNavigate();

  return (
    <>
      <Box px={10} marginTop={3}>
        <Card px={10} marginTop={3} elevation={5}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
          >
            {/* --- Coach Image --- */}
            <Grid item md={2} p={3}>
              <img
                src={mahastiImg}
                alt=""
                style={{ width: "132px", height: "132px", borderRadius: "50%" }}
              />
            </Grid>

            {/* --- Coach Details --- */}
            <Grid item md={8} p={3}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography
                    variant="h5"
                    color="#0f0f3d"
                    fontWeight={600}
                    textTransform="capitalize"
                  >
                    {coachData.firstName && coachData.lastName ? `${coachData.firstName}   ${coachData.lastName}` : ""}
                  </Typography>
                </Grid>

                <Grid item marginTop={1}>
                  <Grid container direction="row">
                    <Grid Item>
                      <Chip
                        icon={<LocationOn sx={{ fontSize: "18px" }} />}
                        label={coachData.country && coachData.state && coachData.city
                          ? `${coachData.state} ,  ${coachData.country} ,  ${coachData.city}` : ""}
                        sx={{
                          fontWeight: 500,
                          textTransform: "uppercase",
                          color: "#74747e",
                        }}
                      />
                    </Grid>
                    <Grid Item marginLeft={3}>
                      <Chip
                        icon={<Person sx={{ fontSize: "18px" }} />}
                        label={
                          12 + " years of experience"
                        }
                        sx={{
                          fontWeight: 500,
                          textTransform: "capitalize",
                          color: "#74747e",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item marginTop={1}>
                  <Typography variant="body2" fontWeight={400} color="#74747e">
                    {coachData.aboutMe}
                  </Typography>
                </Grid>

                <Grid item marginTop={2}>
                  <Grid container direction="row">
                    {coachData.Specialties?.map((specItem) => (
                      <Grid item marginRight={3}>
                        <Typography fontWeight={700} color="#74747e">
                          {specItem}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* --- Coach Cost Details --- */}
            <Grid item md={2} p={3} display="flex">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Grid item>
                  <Typography
                    variant="h5"
                    color="#0f0f3d"
                    fontWeight={600}
                    textAlign="right"
                  >
                    $ {2000}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color="#74747e"
                    textAlign="right"
                  >
                    + (dynamic) more
                  </Typography>
                </Grid>

                <Grid item>
                  <Button
                    sx={{
                      color: "#5e1de1",
                      fontWeight: 600,
                      textAlign: "right",
                    }}
                    onClick={() => navigate('/coachDetail', { state: coachData?._id })}
                    size="small"
                    endIcon={<ArrowForwardIos style={{ fontSize: "15px" }} />}
                  >
                    view profile
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default CoachCard;
