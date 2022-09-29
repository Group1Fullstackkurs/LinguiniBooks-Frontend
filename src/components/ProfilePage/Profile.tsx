import { useState } from "react"
import Loginform from "./Loginform"
import { useRecoilState } from "recoil"
import userState from "../../atoms/userState"

const Profile = () => {
  const [openEditProfile, setopenEditProfile] = useState(false)
  const [userAtom, setUserAtom] = useRecoilState(userState)
  return (
    <div>
      Profile
      <p>Id: {userAtom.id}</p>
      <p>Name: {userAtom.name}</p>
      <p>Mail: {userAtom.mail}</p>
      <p>BoughtBooks: {userAtom.boughtBooks}</p>
      <li>Id: int</li>
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
      <li>BoughtBooks: List</li>
      <button
        className='EditUserButton'
        onClick={() => setopenEditProfile(true)}
      >
        Edit user
      </button>
    </div>
  )
}

export default Profile
