import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const CoachSkillItem = ({ data }) => {

  const userData = data[0];

  return (
    <>
      <Box paddingX={4} marginTop={5}>
        <div>
          <Typography
            variant="subtitle1"
            marginTop={4}
            textTransform="uppercase"
            color="#5e1de1"
            fontWeight={600}
          >
            {"Specialities"}
          </Typography>

          <Grid container direction="row">
            {userData?.Specialties.map((item) => (
              <Grid
                item
                marginTop={2}
                marginRight={3}
                border={1}
                borderColor="#5e1de1"
                borderRadius={5}
                paddingY="5px"
                paddingX="10px"
              >
                <Typography
                  variant="body2"
                  fontWeight={700}
                  textTransform="capitalize"
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <Typography
            variant="subtitle1"
            marginTop={4}
            textTransform="uppercase"
            color="#5e1de1"
            fontWeight={600}
          >
            {"Caoching Types"}
          </Typography>

          <Grid container direction="row">
            {userData?.coachingTypes.map((item) => (
              <Grid
                item
                marginTop={2}
                marginRight={3}
                border={1}
                borderColor="#5e1de1"
                borderRadius={5}
                paddingY="5px"
                paddingX="10px"
              >
                <Typography
                  variant="body2"
                  fontWeight={700}
                  textTransform="capitalize"
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>

        <div>
          <Typography
            variant="subtitle1"
            marginTop={4}
            textTransform="uppercase"
            color="#5e1de1"
            fontWeight={600}
          >
            {"Traget Audience"}
          </Typography>

          <Grid container direction="row">
            {userData?.targetAudience.map((item) => (
              <Grid
                item
                marginTop={2}
                marginRight={3}
                border={1}
                borderColor="#5e1de1"
                borderRadius={5}
                paddingY="5px"
                paddingX="10px"
              >
                <Typography
                  variant="body2"
                  fontWeight={700}
                  textTransform="capitalize"
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>

        <div>
          <Typography
            variant="subtitle1"
            marginTop={4}
            textTransform="uppercase"
            color="#5e1de1"
            fontWeight={600}
          >
            {"Languages"}
          </Typography>

          <Grid container direction="row">
            {userData?.language.map((item) => (
              <Grid
                item
                marginTop={2}
                marginRight={3}
                border={1}
                borderColor="#5e1de1"
                borderRadius={5}
                paddingY="5px"
                paddingX="10px"
              >
                <Typography
                  variant="body2"
                  fontWeight={700}
                  textTransform="capitalize"
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>


      </Box>
    </>
  );
};

export default CoachSkillItem;
