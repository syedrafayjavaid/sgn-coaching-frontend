import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainNavbar from "../MainNavbar";
import MainFooter from "../MainFooter";
import { Box, Button } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import ProfileCover from "../coach-details/ProfileCover";
import DetailedInfo from "../coach-details/DetailedInfo";
import CoachSkillItem from "../coach-details/CoachSkillItem";
import CoachPackages from "../coach-details/CoachPackages";
import axios from "axios";
import config from "../../config";


const CoachDetails = () => {

  const { state } = useLocation();
  const [data, setData] = useState([]);

  // Get a coach data
  const getCoachDetail = () => {
    if (state) {
      axios.get(`${config.base_url}/api/v1/coaches/${state}`)
        .then(res => {
          setData(res.data.data)
        }).catch(error => {
          console.error("The error occured possible cause: ", error)
        })
    }

  }

  useEffect(() => {
    getCoachDetail();
  }, [])

  return (
    <>
      <MainNavbar />
      <Box px={10}>
        <Button variant="contained" startIcon={<ArrowBackIos />}>
          back to marketplace
        </Button>

        <ProfileCover data={data} />
        <DetailedInfo data={data} />
        <CoachSkillItem data={data} />
        <CoachPackages data={data} />
      </Box>
      <MainFooter />
    </>
  );
};

export default CoachDetails;
