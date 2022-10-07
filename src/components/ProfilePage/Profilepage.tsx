import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import userState from "../../atoms/userState"
import Loginform from "./Loginform"
import UserProfile from "./UserProfile"
import "./Profilepage.css"

function Profilepage() {
  const user = useRecoilValue(userState)

  if (user.id != undefined)
    return (
      
      <section>
        <div className='container'>
          <div className='profile-page'>
            <div className='profile-card'>
              <UserProfile />
            </div>
          </div>
        </div>
      </section>
    )
  else
    return (
      <section>
        <div className='container'>
          <div className='profile-page'>
            <div className='profile-card'>
              <Loginform />
            </div>
          </div>
        </div>
      </section>
    )
}
export default Profilepage
