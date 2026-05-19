import { Link } from "react-router-dom";
export function Signup(){
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
                <h5>Already have an account? <Link to="/login">Login</Link></h5>
            </form>
        </div>
    );
}