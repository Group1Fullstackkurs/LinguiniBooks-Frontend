import { useState } from "react"
import { useRecoilValue } from "recoil"
import userState from "../../atoms/userState"
import EditProfile from "./EditProfile"
import "./UserProfile.css"

const Profile = () => {
  const user = useRecoilValue(userState)
  const [isEditing, setIsEditing] = useState(false)
  
  return (
    <div className="userprofile-container">
      <h2>Welcome back, {user.name}!</h2>
      <p>Mail: {user.mail}</p>
      <button onClick={() => setIsEditing(true)}>
        <p>Edit</p>
      </button>
      <button onClick={() => window.location.reload()}>
        <p>Log out</p>
      </button>
      <EditProfile
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      <h3>Bought books: </h3>
      <div className="bought-books">
        {user.boughtBooks.map((book, i) => 
          <p key={book.id+i}>{i+1}. {book.title}({book.new ? "New" : "Used"}) by {book.firstName} {book.lastName}</p>
        )}
      </div>
    </div>
  )
}

export default Profile
