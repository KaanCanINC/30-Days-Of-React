import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const check = '../assets/check-mark-in-a-circle-svgrepo-com.svg';

const UserCard = ({ user: { image, firstName, lastName, description, verify } }) => (
    <div className="user-card">
        <img src={image} alt={firstName} width="300px"/>
        <h1>{firstName} {lastName} {verify && <FaCheckCircle/>}</h1>
        <h2>{description}</h2>
    </div>
)

export default UserCard