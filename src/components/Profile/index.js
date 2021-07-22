import React from "react";
import penguin from "../../gifs/penguin.gif";
import "./styles.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="image">
        <img src={penguin} />
      </div>
      <div className="description">Black pearl won't be same without you!!</div>
    </div>
  );
};

export default Profile;
