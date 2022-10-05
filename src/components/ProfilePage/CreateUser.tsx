import "./CreateUser.css";
import { useState, useEffect } from "react";

type Props = {
  isCreating: boolean;
  setIsCreating: (active: boolean) => void;
};

const CreateUser = ({ isCreating, setIsCreating }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let postUser = {
    name: username,
    hash: password,
    mail: mail,
	};

    const createUser = async () => {
      await fetch("https://linguinibooksapi20220913132810.azurewebsites.net/api/User/", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(postUser)
      })}
    
    if (isSubmitting) {
      createUser();
      setIsSubmitting(false);
    }
  }, [isSubmitting])
  
  const handleUsername = (event: any) => {
    setUsername(event?.target.value);
  };

  const handleEmail = (event: any) => {
    setMail(event?.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event?.target.value);
  };

  const handleSubmit = (event: any) => {
	event.preventDefault();
    setIsSubmitting(true);
  };

  if (isCreating) {
    return (
        <div className="create-container">
          <div className="create-box">
            <label>
              <p>Username</p>
              <input
                type="text"
                placeholder="Username"
                onChange={handleUsername}
              />
            </label>
            <label>
              <p>Email</p>
              <input
                type="text"
                placeholder="Email"
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
            <input type='submit' value='Create' onClick={handleSubmit} />
          </div>
          <div className="close-button">
            <button
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                setIsCreating(false)
              } 
            >
              <p>x</p>
              </button>
          </div>
        </div>
    );
  } else return null;
};

export default CreateUser;
