import "./Profilepage.css"
import { useState, useEffect } from "react"
import EditProfile from "./EditProfile"
import { useRecoilValue } from "recoil"
import userState from "../../atoms/userState"
import fetchLoginUser from "../../Typescript/FetchLoginUser"
import Loginform from "./Loginform"
import isLoggedInState from "../../atoms/isLoggedInState"
import Profile from "./Profile"

function Profilepage() {
  const isLoggedIn = useRecoilValue(isLoggedInState)
  console.log("test1" + isLoggedIn)

  console.log("Isloggeding? PP"+ isLoggedIn)
  useEffect(() => {}
 , [isLoggedInState])
  if (isLoggedIn)
    return (
      
      <section>
        <div className='container'>
          <div className='ProfilePage'>
            <h3>
              This is a nice profile page, good design. Don't ever, and I mean
              EVER touch it, Julia. >>
            </h3>
            <div className='ProfileCard'>
              <Profile />
            </div>
          </div>
          {/* <EditProfile
          open={openEditProfile}
          onClose={() => setopenEditProfile(false)}
        /> */}
        </div>
      </section>
    )
  else
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
            </div>
          </div>
        </div>
      </section>
    )
}
export default Profilepage
