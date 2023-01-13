import { Box, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoachCard from "../coaches-page/CoachCard";
import CoachesList from "../coaches-page/CoachesList";
import MainFooter from "../MainFooter";
import MainNavbar from "../MainNavbar";
import axios from "axios";
import config from "../../config";

const CoachesListing = () => {

  const [data, setData] = useState([]);

  // Get all coaches
  const getCoaches = () => {
    console.log("The url has", config.base_url);
    axios.get(`${config.base_url}/api/v1/coaches`)
      .then(res => {
        setData(res.data.data)
      }).catch(error => {
        console.error("The error occured possible cause: ", error)
      })
  }


  useEffect(() => {
    getCoaches();
  }, [])
  return (
    <>
      <MainNavbar />

      <Box px={10}>
        <Typography variant="h2" color="#0f0f3d" fontWeight={600}>
          Coaches Listing
        </Typography>
      </Box>

      {/* <CoachCard /> */}

      <Box px={10} marginTop={2}>
        <Typography
          variant="h6"
          sx={{ display: "inline-block", color: "#0f0f3d" }}
        >
          Independent Coaches (total count)
        </Typography>

        <Typography
          variant="body1"
          sx={{ display: "inline-block", marginLeft: 1 }}
        >
          <Link href="/" color="#0f0f3d">
            view all
          </Link>
        </Typography>
      </Box>

      <CoachesList data={data} />

      <MainFooter />
    </>
  );
};

export default CoachesListing;
