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

  const handleSubmit = event => {
    setIsLoggingIn(true)
  }
  console.log(usernameInput)

  useEffect(() => {
    fetchLoginUser(usernameInput, passwordInput).then(user =>
      console.log("fetching:", user)
    )
    fetchLoginUser(usernameInput, passwordInput).then(user => setUserAtom(user))
    console.log("Logging in...")
    console.log("userState: ", userState)
    userState === null ? setIsLoggedIn(false) : setIsLoggedIn(true)
    console.log("isLoggedIn: ", isLoggedIn)
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
    </form>
  )
}

export default Loginform
