import React from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

const CoachPackages = ({ data }) => {

  const userData = data[0];

  return (
    <>
      <Box paddingX={4} marginTop={8}>
        <Typography variant="h4" color="#0f0f3d" fontWeight={600}>
          Packages
        </Typography>
        <Grid
          container
          direction="row"
          marginTop={3}
          border={1}
          borderRadius={2}
          borderColor="#5e1de1"
          paddingY={5}
          paddingX={4}
        >
          <Grid item md={10}>
            <Typography
              variant="h5"
              textTransform="capitalize"
              color="#0f0f3d"
              fontWeight={600}
            >
              coaching.com: conscious innovation: transform poeple's lives ..
              and your own
            </Typography>

            <Typography
              variant="subtitle2"
              textTransform="uppercase"
              color="#0f0f3d"
              fontWeight={600}
              marginTop={1}
            >
              £1,476.00 Fixed amount
            </Typography>

            <Typography
              variant="subtitle2"
              color="#74747e"
              fontWeight={400}
              marginTop={2}
            >
              Do you love to invest in social change and ignite positive impact?
            </Typography>

            <Typography
              variant="subtitle2"
              color="#74747e"
              fontWeight={400}
              marginTop={3}
            >
              Step into a 3-month Thinking Partnership programme where you can
              think independently for yourself and as yourself, without
              judgment, advice or "training"
            </Typography>
          </Grid>
          <Grid item md={2} alignItems="center" justifyContent="center">
            <Link
              href=""
              sx={{
                color: "#5e1de1",
                fontSize: "12px",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "block",
                textAlign: "right",
                fontWeight: 700,
              }}
            >
              view details <ArrowForwardIos style={{ fontSize: "11px" }} />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CoachPackages;
