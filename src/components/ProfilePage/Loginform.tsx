import "./Profilepage.css"
import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import userState from "../../atoms/userState"
import fetchLoginUser from "../../Typescript/FetchLoginUser"
import isLoggedInState from "../../atoms/isLoggedInState"

const Loginform = () => {
  const [userAtom, setUserAtom] = useRecoilState(userState)
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState)
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleChangeUsername = event => {
    setUsernameInput(event.target.value)
  }
  const handleChangePassword = event => {
    setPasswordInput(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault() // to prevent submit to re-render the page as default
    setIsLoggingIn(true)
  }
  
  useEffect(() => {
    
    const getUser = async () => {
      await fetchLoginUser(usernameInput, passwordInput).then(user => console.log("Fetching user: ", user))
      await fetchLoginUser(usernameInput, passwordInput).then(user => setUserAtom(user))
    }
    if(isLoggingIn){
      getUser()
    }
    userAtom.id === null ? setIsLoggedIn(false) : setIsLoggedIn(true)

  }, [isLoggingIn])

  return (
    <form>
      <label>
        Username:
        <input
          type='text'
          id='username'
          name='username'
          onChange={handleChangeUsername}
          value={usernameInput}
        />
        Password:
        <input
          type='text'
          id='password'
          name='password'
          onChange={handleChangePassword}
          value={passwordInput}
        />
      </label>

      <input type='submit' value='Submit' onClick={handleSubmit} />
      <p>user: {userAtom.name}</p>
      {userAtom.id}
    </form>
  )
}

export default Loginform
