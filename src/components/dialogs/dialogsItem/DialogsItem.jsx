import React from 'react';
import './DialogsItem.css';
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  return (
      <div className="dialogs-users-item">
        <NavLink to={ "/dialogs/" + props.id }>{ props.name }</NavLink>
      </div>
  );
};

export default DialogsItem;
