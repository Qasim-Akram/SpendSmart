function Login(){
    return (
        <div>
            <h1>Welcome Back</h1>
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="*******(min 6 characters)" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;