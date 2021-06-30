import React from "react";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

export default FriendListItem;
