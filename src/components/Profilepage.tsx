import "./Profilepage.css";
import { useState, useEffect } from "react";
import EditProfile from "./EditProfile";

function Profilepage() {

  const [openEditProfile, setopenEditProfile] = useState(false)
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  const handleChangeUsername = event => {setUsernameInput(event.target.value)}
  const handleChangePassword = event => {setPasswordInput(event.target.value) }
  
  console.log(usernameInput)

  return (
    <section>
      <div className="container">
        <div className="ProfilePage">
          <h3>
            This is a nice profile page, good design. Don't ever, and I mean
            EVER touch it, Julia.
          </h3>
          <div className="ProfileCard">
            <p>
              <form>
                <label>
                  Username:
                  <input type="text" id="username" name="username" onChange={handleChangeUsername} value={usernameInput} />
                  Password:
                  <input type="text" id="password" name="password" onChange={handleChangePassword} value={passwordInput} />
                </label>
                <input type="submit" value="Submit" />
              </form>

              {/* <li>Id: int</li>
              <li>Name: string</li>
              <li>Mail: string</li>
              <li>Hash: string</li> 
              <li> Salt: string</li>
              <li>IsBlockedSelling: bool</li>
              <li>IsBlockedAccount: bool</li>
              <li>IsAdmin: bool</li>
              <li>IsSeller: bool </li>
              <li>IsActivatedAccount: bool </li>
              <li>IsActivatedSelling: bool </li>
              <li>BoughtBooks: List</li> */}
              
            </p>
          </div>
        </div>
        
        <button className="EditUserButton"
          onClick={() => setopenEditProfile(true)}>
          Edit user
        </button>
        <EditProfile
          open={openEditProfile}
          onClose={() => setopenEditProfile(false)}
        />
      </div>
    </section>
  )
}
export default Profilepage;
