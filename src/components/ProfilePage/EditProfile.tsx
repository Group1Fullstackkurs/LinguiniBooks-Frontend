import "../CSS/EditProfile.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import userState from "../../atoms/userState";
import React from "react";

type Props = {
  isEditing: boolean;
  setIsEditing: (active: boolean) => void;
};

const EditProfile = ({ isEditing, setIsEditing }: Props) => {
  const [user, setUser] = useRecoilState(userState);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newMail, setNewMail] = useState("");

  const handleUsername = (event: any) => {
    setNewUsername(event?.target.value);
  };

  const handleEmail = (event: any) => {
    setNewMail(event?.target.value);
  };

  const handlePassword = (event: any) => {
    setNewPassword(event?.target.value);
  };

  if (isEditing) {
    return (
      <div className="overlay">
        <div className="edit-container">
          <div className="edit-box">
            <label>
              <p>Username</p>
              <input
                type="text"
                placeholder={user.name}
                onChange={handleUsername}
              />
            </label>
            <label>
              <p>Email</p>
              <input
                type="text"
                placeholder={user.mail}
                onChange={handleEmail}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="text"
                placeholder="********"
                onChange={handlePassword}
              />
            </label>
          </div>
          <div className="content">
            <button
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                setIsEditing(false)
              }
              className="close-button"
            ></button>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default EditProfile;
