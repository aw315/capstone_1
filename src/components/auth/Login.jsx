import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUserByEmail } from "../../services/userService";
import "./Login.css"

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const foundUsers = await getUserByEmail(email);

    if (foundUsers && foundUsers.length === 1) {
      const user = foundUsers[0];

      localStorage.setItem(
        "guru_user",
        JSON.stringify({
          id: user.id,
        })
      );

      navigate("/Dropdown");
    } else window.alert("Invalid login");
  };

  return (
    <main className="container-login">
      <style>{'body { background-color: navy; }'}</style>
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <h1 style={{color: 'white'}}>Video Game Guru</h1>
          <h2 style={{color: 'white'}}>Please sign in</h2>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <p/>
          <fieldset>
            <div className="form-group">
              <button className="login-btn btn-info" type="submit">
                Sign in
              </button>
            </div>
            <p/>
          </fieldset>
        </form>
      </section>
      <p/>
      <section>
        <Link to="/register" className="not-a-member-link" style={{color: 'white'}}>Not a member yet?</Link>
      </section>
    </main>
  );
}
