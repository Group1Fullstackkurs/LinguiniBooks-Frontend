import "./Profilepage.css"
import { useState, useEffect } from "react"
import EditProfile from "./EditProfile"
import { useRecoilValue } from "recoil"
import userState from "../../atoms/userState"
import fetchLoginUser from "../../Typescript/FetchLoginUser"
import Loginform from "./Loginform"
import isLoggedInState from "../../atoms/isLoggedInState"

function Profilepage() {
  const isLoggedIn = useRecoilValue(isLoggedInState)
  return (
    <section>
      <div className='container'>
        <div className='ProfilePage'>
          <h3>
            This is a nice profile page, good design. Don't ever, and I mean
            EVER touch it, Julia.
          </h3>
          <div className='ProfileCard'>
            <Loginform />
            {/* // {isLoggedIn?} */}
          </div>
        </div>
        {/* <EditProfile
          open={openEditProfile}
          onClose={() => setopenEditProfile(false)}
        /> */}
      </div>
    </section>
  )
}
export default Profilepage
