import { Link } from "react-router-dom";

function Login(){
    return (
        <div>
            <h1>Welcome Back</h1>
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="*******(min 6 characters)" />
                <button type="submit">Login</button>
                <h5>didn't have a account? <Link to="/signup">Create one</Link></h5>
            </form>
        </div>
    )
}

export default Login;