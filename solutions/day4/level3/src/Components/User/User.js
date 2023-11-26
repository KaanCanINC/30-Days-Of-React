import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

const users = [
  {
    profilePhoto: "https://via.placeholder.com/350/f66b97",
    name: "KaanCan",
    surName: "INC",
    userInfo: "Junior Developer",
    location: "Türkiye",
    verify: true,
  },
];

const joinDate = "Joined on AUG 08 2022";

export const User = () => <UserFormat />;

export const JoinDate = () => (
  <div className="joinDate">
    <MdOutlineWatchLater />
    {joinDate}
  </div>
);

const UserFormat = () => {
  return users.map((user, index) => (
    <div key={index}>
      <img src={user.profilePhoto} alt="ProfilePhoto" />
      <h1>
        {`${user.name} ${user.surName}`} {user.verify && <FaCheckCircle />}
      </h1>
      <p>{`${user.userInfo} ${user.location}`}</p>
    </div>
  ));
};
