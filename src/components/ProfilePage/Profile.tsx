import { useState } from "react"
import { useRecoilValue } from "recoil"
import userState from "../../atoms/userState"
import EditProfile from "./EditProfile"
import "../CSS/Profile.css"

const Profile = () => {
  const user = useRecoilValue(userState)
  const [isEditing, setIsEditing] = useState(false)
  
  return (
    <div>
      <h3>Welcome back, {user.name}!</h3>
      <EditProfile
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      <p>Bought books: {user.boughtBooks.map(book => book.title)}</p>
      
      <button className='update-user-btn' onClick={() => setIsEditing(true)}>
        Edit
      </button>
    </div>
  )
}

export default Profile
