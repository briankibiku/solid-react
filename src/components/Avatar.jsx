import React from "react";

export const Avatar = (props) => {
  return (
    <>
      <div>Avatar</div>
      <div>{props.user.name}</div>
      <img src={props.user.pic} height="100" width="100" alt="avatar" />
    </>
  );
};
