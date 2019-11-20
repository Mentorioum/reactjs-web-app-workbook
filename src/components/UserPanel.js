import React from 'react';

export const UserPanel = (props) => (
  <div className="user-block">
    <img src={props.user.avatarUrl} alt=""/>
    <strong>{props.user.firstName} {props.user.lastName}</strong>
  </div>
);
