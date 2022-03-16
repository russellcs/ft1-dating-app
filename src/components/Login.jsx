const Login = () => {
  return (
    <>
      <form name="registerForm">
        <h1>Please Log In</h1>
        <div className="formRow">
          <label>
            Email Address:
            <input type="email" placeholder="Email" name="email" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              placeholder="Password (8 characters minimum)"
              name="password"
              minLength="8"
              required
            />
          </label>
        </div>
        <input type="submit" value="Sign In"></input>
      </form>
    </>
  );
};

export default Login;
