import React from "react";
import {User, JoinDate} from "../User/User";
import SkillCards from "../SkillCards/SkillCards";

const UserProfile = () => (
  <div className="userContainer">
    <div className="UserProfile">
      <User />
      <SkillCards />
      <JoinDate />
    </div>
  </div>
);

export default UserProfile;
