import { useState } from "react"

const Profile = () => {
  const [openEditProfile, setopenEditProfile] = useState(false)
  return (
    <div>
      Profile
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
