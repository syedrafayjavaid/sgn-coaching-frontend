import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

// import solutionCards from "./solutionsData";

import nextArr from "../../assets/images/next-arrow.png";
import indIcon from "../../assets/images/individual-icon.png";
import coachIcon from "../../assets/images/coaches-icon.png";
import bussIcon from "../../assets/images/business-icon.png";
import enterIcon from "../../assets/images/enterprise-icon.png";

const CoachingSolution = () => {
  return (
    <>
      <Box paddingY={8}>
        <Typography
          variant="h3"
          textAlign="center"
          color="#0f0f3d"
          fontWeight={600}
        >
          The only coaching solution you'll ever need!
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          px={6}
          mt={5}
        >
          <Grid item md={3} px={2}>
            <Grid px={3} border={2} borderRadius={2} borderColor="#5d1de1">
              <img
                src={indIcon}
                alt="individuals-icon"
                style={{ marginTop: "30px" }}
              />

              <Typography
                variant="subtitle1"
                textTransform="uppercase"
                fontWeight={600}
                color="#0f0f3d"
                mt={2}
              >
                individuals
              </Typography>

              <Typography
                variant="h5"
                fontWeight={600}
                color="#0f0f3d"
                mt={2}
                height="170px"
              >
                For people looking for a coach to unlock and empower their
                growth and potential
              </Typography>

              <Button
                sx={{ marginTop: 4, marginBottom: 3, color: "black" }}
                endIcon={
                  <img
                    src={nextArr}
                    style={{ width: "60%", paddingLeft: "5px" }}
                  />
                }
              >
                learn more
              </Button>
            </Grid>
          </Grid>

          <Grid item md={3} px={2}>
            <Grid px={3} border={2} borderRadius={2} borderColor="#fe628b">
              <img
                src={coachIcon}
                alt="coaches-icon"
                style={{ marginTop: "30px" }}
              />

              <Typography
                variant="subtitle1"
                textTransform="uppercase"
                fontWeight={600}
                color="#0f0f3d"
                mt={2}
              >
                coaches
              </Typography>

              <Typography
                variant="h5"
                fontWeight={600}
                color="#0f0f3d"
                mt={2}
                height="170px"
              >
                For professional coaches that want to spend more time doing what
                they do best
              </Typography>

              <Button
                sx={{ marginTop: 4, marginBottom: 3, color: "black" }}
                endIcon={
                  <img
                    src={nextArr}
                    style={{ width: "60%", paddingLeft: "5px" }}
                  />
                }
              >
                learn more
              </Button>
            </Grid>
          </Grid>

          <Grid item md={3} px={2}>
            <Grid px={3} border={2} borderRadius={2} borderColor="#fcb806">
              <img
                src={bussIcon}
                alt="business-icon"
                style={{ marginTop: "30px" }}
              />

              <Typography
                variant="subtitle1"
                textTransform="uppercase"
                fontWeight={600}
                color="#0f0f3d"
                mt={2}
              >
                business
              </Typography>

              <Typography
                variant="h5"
                fontWeight={600}
                color="#0f0f3d"
                mt={2}
                height="170px"
              >
                For companies that want to take their coaching practice to next
                level
              </Typography>

              <Button
                sx={{ marginTop: 4, marginBottom: 3, color: "black" }}
                endIcon={
                  <img
                    src={nextArr}
                    style={{ width: "60%", paddingLeft: "5px" }}
                  />
                }
              >
                learn more
              </Button>
            </Grid>
          </Grid>

          <Grid item md={3} px={2}>
            <Grid px={3} border={2} borderRadius={2} borderColor="#f7931e">
              <img
                src={bussIcon}
                alt="business-icon"
                style={{ marginTop: "30px" }}
              />

              <Typography
                variant="subtitle1"
                textTransform="uppercase"
                fontWeight={600}
                color="#0f0f3d"
                mt={2}
              >
                enterprise
              </Typography>

              <Typography
                variant="h5"
                fontWeight={600}
                color="#0f0f3d"
                mt={2}
                height="170px"
              >
                For large organizations looking to enhance the impact of
                coaching
              </Typography>

              <Button
                sx={{ marginTop: 4, marginBottom: 3, color: "black" }}
                endIcon={
                  <img
                    src={nextArr}
                    style={{ width: "60%", paddingLeft: "5px" }}
                  />
                }
              >
                learn more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CoachingSolution;
