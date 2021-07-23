import React from "react";
import penguin from "../../gifs/penguin.gif";
import "./styles.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="image">
        <img src={penguin} />
      </div>
      <div className="description">Digital Singham!! You will be missed</div>
    </div>
  );
};

export default Profile;
