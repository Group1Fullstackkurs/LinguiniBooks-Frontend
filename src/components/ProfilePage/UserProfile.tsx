import { useState } from "react"
import { useRecoilValue } from "recoil"
import userState from "../../atoms/userState"
import EditProfile from "./EditProfile"
import "./UserProfile.css"

const Profile = () => {
  const user = useRecoilValue(userState)
  const [isEditing, setIsEditing] = useState(false)
  
  return (
    <div>
      <h3>Welcome back, {user.name}!</h3>
      <p>{user.mail}</p>
      <EditProfile
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      <p>Bought books: {user.boughtBooks.map(book => book.title)}</p>
      <p>{user.id}</p>
      
      <button className='update-user-btn' onClick={() => setIsEditing(true)}>
        <p>Edit</p>
      </button>
    </div>
  )
}

export default Profile
