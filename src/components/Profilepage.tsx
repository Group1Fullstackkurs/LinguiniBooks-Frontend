import "./Profilepage.css";
import { useState, useEffect } from "react";

function Profilepage() {
 

  return (
    <section>
      <div className="ProfilePage">
        <h3>This is a nice profile page, good design.</h3>
        <div className="ProfileCard">
          <p>
            Id: int
            Name: string
            Mail: string
            Hash: string
            Salt: string
            IsBlockedSelling: bool
            IsBlockedAccount: bool
            IsAdmin: bool
            IsSeller: bool
            IsActivatedAccount: bool
            IsActivatedSelling: bool
            BoughtBooks: List
          </p>
        </div>
      </div>
    </section>
  );
}
export default Profilepage;
