import React from 'react';
import { PersonCircle } from "react-bootstrap-icons";
import "./user-card.css";

const UserCard = ({ name = '', email = '', phone = '' }) => {
    return (
        <div className="user-card m-2 p-2">
            <div className="user-img">
                <PersonCircle size={50} />
            </div>
            <div className="user-details">
                {`Name: ${name}`}
            </div>
            <div className="user-details">
                Email: {`${email}`}
            </div>
            <div className="user-details">
                Phone: {`${phone}`}
            </div>
        </div>
    );
};

export default UserCard;