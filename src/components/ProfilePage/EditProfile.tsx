import "../CSS/EditProfile.css";
import { useState, useEffect } from "react";
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
  const [oldPassword, setOldPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let putUser = {...user};
    putUser.name = newUsername;
    putUser.hash = newPassword;
    putUser.mail = newMail;

    fetch("https://linguinibooksapi20220913132810.azurewebsites.net/api/User/" + user.id + "/" + oldPassword, {
      method: "PUT",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(putUser)
    })
  }, [isSubmitting]);
  
  const handleUsername = (event: any) => {
    setNewUsername(event?.target.value);
  };

  const handleEmail = (event: any) => {
    setNewMail(event?.target.value);
  };

  const handleNewPassword = (event: any) => {
    setNewPassword(event?.target.value);
  };

  const handleOldPassword = (event: any) => {
    setOldPassword(event?.target.value);
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setUser({
      ...user,
      name: newUsername,
      hash: newPassword,
      mail: newMail,
    });
  };

  if (isEditing) {
    return (
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
              <p>New Password</p>
              <input
                type="text"
                placeholder="********"
                onChange={handleNewPassword}
              />
            </label>
            <label>
              <p>Old Password</p>
              <input
                type="text"
                placeholder="********"
                onChange={handleOldPassword}
              />
            </label>
            <input type='submit' value='Apply' onClick={handleSubmit} />
          </div>
          <div className="close-button">
            <button
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                setIsEditing(false)
              } 
            >
              <p>x</p>
              </button>
          </div>
        </div>
    );
  } else return null;
};

export default EditProfile;
