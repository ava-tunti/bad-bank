function Login() {
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState(false);
    const ctx = React.useContext(UserContext);

    function validateLogin() {
        if (!email || !password) {
            setStatus('Error: Missing email or password');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        const user = ctx.users.find(user => user.email === email && user.password === password);

        if (user) {
            setLoggedIn(true);
            setStatus('');
            return true;
        } else {
            setStatus('Error: Invalid email or password');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
    }

    function handleLogin() {
        console.log(email, password);
        validateLogin();
    }

    function clearForm() {
        setEmail('');
        setPassword('');
        setLoggedIn(false);
    }

    return (
        <Card
            bgcolor="light-orange"
            header="Login"
            status={status}
            body={!loggedIn ? (
                <>
                    Email address<br />
                    <input
                        type="input"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                    /><br />
                    Password<br />
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                    /><br />
                    <button
                        type="submit"
                        className="btn btn-light"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </>
            ) : (
                <>
                    <h5>Logged In Successfully</h5>
                    <button
                        type="submit"
                        className="btn btn-light"
                        onClick={clearForm}
                    >
                        Log Out
                    </button>
                </>
            )}
        />
    );
}
