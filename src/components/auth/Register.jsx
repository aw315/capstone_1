import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createNewUser, getUserByEmail } from "../../services/userService"

export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    username: ""
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    createNewUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "guru_user",
          JSON.stringify({
            id: createdUser.id
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateUser = (evt) => {
    const copy = { ...customer }
    copy[evt.target.id] = evt.target.value
    setUser(copy)
  }

  return (
    <main style={{ textAlign: "center" }}>
      <style>{'body { background-color: navy; }'}</style>
      <form className="form-login" onSubmit={handleRegister}>
        <h1 style={{color: 'white'}}>Video Game Guru</h1>
        <h2 style={{color: 'white'}}>Please Register</h2>
        <p/>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <p/>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
        </fieldset>
        <p/>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="username"
              id="username"
              className="form-control"
              placeholder="Choose a username"
              required
            />
          </div>
        </fieldset>
        <p/>
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
      <p/>
      <div>
        <button onClick={() => {navigate("/Login")}}>Return</button>
      </div>
    </main>
  )
}