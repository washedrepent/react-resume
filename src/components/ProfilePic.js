import React from "react";
import profilePic from "../face-white-bg.jpg";

const ProfilePic = function () {
    return React.createElement("img", {
        src: profilePic,
        alt: "Hans-Eric Lippke Face",
        className: "profilePic",
    });
};

export default ProfilePic;
