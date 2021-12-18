function Login() {
    return(
        <main className="page login-page">
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Log In</h2>
        </div>
        <form>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
            <label className="form-check-label" htmlFor="rememberPasswordCheck">
              Remember password
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
              in</button>
          </div>
          <hr className="my-4"/>
          <div className="d-grid mb-2">
            <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
              <i className="fab fa-google me-2"></i> Sign in with Google
            </button>
          </div>
          <div className="d-grid">
            <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
              <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
    )
}
export default Login;