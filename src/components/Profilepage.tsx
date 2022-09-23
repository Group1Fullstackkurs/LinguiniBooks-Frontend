import "./Profilepage.css";
import { useState, useEffect } from "react";
import EditProfile from "./EditProfile";

function Profilepage() {

  const [openEditProfile, setopenEditProfile] = useState(false)  
 

  return (
    <section>
      <div className="container">
        <div className="ProfilePage">
          <h3>This is a nice profile page, good design. Don't ever, and I mean EVER touch it, Julia.</h3>
          <div className="ProfileCard">
            <p>
              <li>Id: int</li>
              <li>Name: string</li>
              <li>Mail: string</li>
              <li>Hash: string</li>
              <li> Salt: string</li>
              <li>IsBlockedSelling: bool</li>
              <li>IsBlockedAccount: bool</li>
              <li>IsAdmin: bool</li>
              <li>IsSeller: bool </li>
              <li>IsActivatedAccount: bool  </li>
              <li>IsActivatedSelling: bool </li>
              <li>BoughtBooks: List</li>
            </p>

          </div>

        </div>
          <button className="EditUserButton" onClick={() => setopenEditProfile(true)}>Edit user</button>
        <EditProfile open={openEditProfile} onClose={() => setopenEditProfile(false)}/>
      </div>
    </section>
  );
}
export default Profilepage;
