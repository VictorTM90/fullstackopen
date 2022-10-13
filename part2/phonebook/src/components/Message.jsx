import React from "react";
import './notification.css'

export const Notification = ({ message, error }) => {
  if (message === null && error === null) return null;
  return (
    <div className="notification">
      {message ? (
        <h3 className="message">{message}</h3>
      ) : (
        <h3 className="Error">{error}</h3>
      )}
    </div>
  );
};
