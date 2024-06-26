import { Button } from "reactstrap"
import "./Welcome.css"
import { useNavigate } from "react-router-dom"

export const Welcome = () => {

    const navigate = useNavigate()

    return (
        <div className="welcome-container">
            <style>{'body { background-color: navy; }'}</style>
            <h1>
                <span className="header-1"style={{color: 'white'}}>Video Game Guru</span>
            </h1>
            <div style={{color: 'white'}}>One-stop shop database for all new-generation games</div>
            <p/>
            <Button
                    color="primary"
                    href="#"
                    tag="a"
                    onClick={() => {navigate("/login")}}
                    className="text-center"
                    size="lg"
                    >
                    Login
            </Button>
                <p/>
            <Button
                    color="primary"
                    href="#"
                    tag="a"
                    onClick={() => {navigate("/register")}}
                    className="text-center"
                    >
                    Not a member?
            </Button>

        </div>
    )
}