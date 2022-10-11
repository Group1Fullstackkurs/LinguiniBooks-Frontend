import { useState } from "react"
import { useRecoilState } from "recoil"
import userState from "../../atoms/userState"
import cartState from "../../atoms/cartState"
import pwdState from "../../atoms/pwdState"
import EditProfile from "./EditProfile"
import { UserModel } from "../../Typescript/UserModel"
import CartModel from "../../Typescript/CartModel"
import "./UserProfile.css"

const Profile = () => {
  const [user, setUser] = useRecoilState(userState)
  const [cart, setCart] = useRecoilState(cartState)
  const [pwd, setPwd] = useRecoilState(pwdState)
  const [isEditing, setIsEditing] = useState(false)

  const handleLogOut = () =>{
    setUser({} as UserModel)
    setCart([] as CartModel[])
    setPwd("")
  }

  return (
    <div className="userprofile-container">
      <h2>Welcome back, {user.name}!</h2>
      <p>Mail: {user.mail}</p>
      <button onClick={() => setIsEditing(true)}>
        <p>Edit</p>
      </button>
      <button onClick={() => handleLogOut()}>
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
