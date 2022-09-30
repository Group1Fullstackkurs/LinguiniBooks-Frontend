import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import userState from "../../atoms/userState"
import Loginform from "./Loginform"
import Profile from "./Profile"
import "../CSS/Profilepage.css"

function Profilepage() {
  const user = useRecoilValue(userState)
  
  useEffect(() => {}, [user])

  if (user.id != undefined)
    return (
      
      <section>
        <div className='container'>
          <div className='profile-page'>
            <h3>
              This is a nice profile page, good design. Don't ever, and I mean
              EVER touch it, Julia.
            </h3>
            <div className='profile-card'>
              <Profile />
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
            <h3>
              This is a nice profile page, good design. Don't ever, and I mean
              EVER touch it, Julia.
            </h3>
            <div className='profile-card'>
              <Loginform />
            </div>
          </div>
        </div>
      </section>
    )
}
export default Profilepage
