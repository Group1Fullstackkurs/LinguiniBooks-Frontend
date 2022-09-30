import "../CSS/Loginform.css"
import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import userState from "../../atoms/userState"
import fetchLoginUser from "../../Typescript/FetchLoginUser"

const Loginform = () => {
  const [userAtom, setUserAtom] = useRecoilState(userState)
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleChangeUsername = (event: any) => {
    setUsernameInput(event.target.value)
  }
  const handleChangePassword = (event: any) => {
    setPasswordInput(event.target.value)
  }
  const handleSubmit = (event: any) => {
    event.preventDefault() // to prevent submit to re-render the page as default
    setIsLoggingIn(true)
  }
  
  useEffect(() => {
    const getUser = async () => {
      await fetchLoginUser(usernameInput, passwordInput).then(user =>
        setUserAtom(user)
      )
    }
    
    if (isLoggingIn) {
      getUser()
    }
    
  }, [isLoggingIn])

  return (
    <form className="form-container">
      <h2>Sign in below</h2>
      <label>
        <p>Username:</p> 
        <input
          type='text'
          id='username'
          name='username'
          onChange={handleChangeUsername}
          value={usernameInput}
        />
        <p>Password:</p>
        <input
          type='text'
          id='password'
          name='password'
          onChange={handleChangePassword}
          value={passwordInput}
        />
      </label>
      <input type='submit' value='Submit' placeholder="Sign in" onClick={handleSubmit} />
    </form>
  )
}

export default Loginform
