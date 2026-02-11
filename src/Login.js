function Login() {
  return (
    <section className="login-container">
      <h1>SmartStudy AI</h1>
      <p>Student Performance Monitoring System</p>

      <form>
        <label>
          Username
          <input type="text" />
        </label>

        <label>
          Password
          <input type="password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
