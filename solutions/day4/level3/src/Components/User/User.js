import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

const users = [
  {
    profilePhoto: "https://i.imgur.com/clhul0V.jpg",
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
    <div className="joinDateIcon">
      <MdOutlineWatchLater />
    </div>
    <p className="joinDateText">{joinDate}</p>
  </div>
);

const UserFormat = () => {
  return users.map((user, index) => (
    <div key={index}>
      <img
        src={user.profilePhoto}
        alt="ProfilePhoto"
        className={`${user.name.toLowerCase()}ProfilePhoto`}
      />
      <div className="profileText">
        <h1
          className={`${user.name.toLowerCase()}Name`}
        >{`${user.name} ${user.surName}`}</h1>
        {user.verify && <FaCheckCircle />}
      </div>
      <p className="userDescription">{`${user.userInfo}, ${user.location}`}</p>
    </div>
  ));
};
