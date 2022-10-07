import "./Loginform.css"
import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import userState from "../../atoms/userState"
import pwdState from "../../atoms/pwdState"
import fetchLoginUser from "../../Typescript/FetchLoginUser"
import CreateUser from "./CreateUser"

const Loginform = () => {
  const [userAtom, setUserAtom] = useRecoilState(userState)
  const [userPwd, setUserPwd] = useRecoilState(pwdState)
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

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

  const handleClick = (event: any) => {
    event.preventDefault()
    setIsCreating(true)
  }
  
  useEffect(() => {
    const getUser = async () => {
      await fetchLoginUser(usernameInput, passwordInput).then(user =>
        setUserAtom(user)
      )
    }
    
    if (isLoggingIn) {
      getUser()
      setUserPwd(passwordInput)
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
      <input type='submit' value='Sign in' onClick={handleSubmit} />
      <button onClick={handleClick}
      >
        <p>Create account</p>
      </button>
      <CreateUser isCreating={isCreating} setIsCreating={setIsCreating} />
    </form>
  )
}

export default Loginform
