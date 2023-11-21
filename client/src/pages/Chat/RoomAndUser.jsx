import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoomAndUsers = ({ socket, username, friend }) => {
  return (
    <div className="friendAndUsersColumn">
      <h2 className="friendTitle">{friend}</h2>

      <div>
        {friendUsers.length > 0 && <h5 className="usersTitle">Users:</h5>}
        <ul className="usersList">
          {friendUsers.map((user) => (
            <li
              style={{
                fontWeight: `${user.username === username ? "bold" : "normal"}`,
              }}
              key={user.id}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>

      <button className="btn btn-outline" onClick={leaveRoom}>
        Leave
      </button>
    </div>
  );
};

export default RoomAndUsers;
