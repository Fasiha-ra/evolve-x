import React from "react";
import CoachingCategory from "./coachingCategory";
import Session from "./Session";
import EnrollSession from "./Enroll";
import CoachingProfile from "./CoachingProfile";
import Schedule from "./Schedule";
import Trending from "./Trending";
import Discussion from "../rightSideBar/Comment/index";
import { HomeWrap } from "./Home.styles";
const Home = () => {
  return (
    <HomeWrap>
      <div className="discussion">
        <Discussion />
      </div>
      <CoachingCategory />
      <Session />
      <EnrollSession />
      <CoachingProfile />
      <Schedule />
      <Trending />
    </HomeWrap>
  );
};

export default Home;
