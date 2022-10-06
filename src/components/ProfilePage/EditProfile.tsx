import "./EditProfile.css";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import userState from "../../atoms/userState";
import React from "react";

type Props = {
  isEditing: boolean;
  setIsEditing: (active: boolean) => void;
};

const EditProfile = ({ isEditing, setIsEditing }: Props) => {
  const user = useRecoilValue(userState);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newMail, setNewMail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [oldPassword, setOldPassword] = useState("");

  useEffect(() => {
    let putUser = {...user};
    putUser.name = newUsername;
    putUser.hash = newPassword;
    putUser.mail = newMail;

    const updateUser = async () =>{
     await fetch("https://linguinibooksapi20220913132810.azurewebsites.net/api/User/" + user.id + "/" + oldPassword, {
        method: "PUT",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(putUser)
      })
    }
    if(isSubmitting){
      updateUser();
      setIsSubmitting(false);
    }
    
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
    if(oldPassword === user.hash){
      setIsSubmitting(true);
    }else alert("Wrong password");    
  };

  if (isEditing) {
    return (
        <div className="edit-container">
          <div className="edit-box">
          <div className="close-button">
            <button
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                setIsEditing(false)
              } 
            >
              <p>x</p>
              </button>
          </div>
            <label>
              <p>Username</p>
              <input
                type="text"
                placeholder={user.name}
                onChange={handleUsername}
                maxLength={8}
                required
              />
            </label>
            <label>
              <p>Email</p>
              <input
                type="text"
                placeholder={user.mail}
                onChange={handleEmail}
                required
              />
            </label>
            <label>
              <p>New Password</p>
              <input
                type="text"
                placeholder="********"
                onChange={handleNewPassword}
                maxLength={8}
                required
              />
            </label>
            <label>
              <p>Old Password</p>
              <input
                type="text"
                placeholder="********"
                onChange={handleOldPassword}
                maxLength={8}
                required
              />
            </label>
            <input type='submit' value='Apply' onClick={handleSubmit} />
          </div>
          
        </div>
    );
  } else return null;
};

export default EditProfile;
