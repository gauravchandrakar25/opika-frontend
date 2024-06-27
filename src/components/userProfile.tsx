import React, { useState } from "react";
import "./UserProfile.css";

interface UserProfileProps {
  name: string;
  imageSrc: string;
  bio: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  imageSrc,
  bio,
  email,
}) => {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="user-profile mt-5">
      <img className="profile-image" src={imageSrc} alt={`${name}'s profile`} />
      <h2 className="user-name">{name}</h2>
      <p className="user-bio">{bio}</p>
      <button className="toggle-email-button" onClick={toggleEmail}>
        {showEmail ? "Hide Email" : "Show Email"}
      </button>
      {showEmail && <p className="user-email">{email}</p>}
    </div>
  );
};

export default UserProfile;
