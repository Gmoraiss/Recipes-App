import React, { } from 'react';

function Login() {
  return (
    <form onSubmit={ (e) => e.preventDefault() }>
      <label htmlFor="email-input">
        E-mail:
        <input
          data-testid="email-input"
          id="email-input"
          // value={ }
          name="email"
          type="email"
        />
      </label>

      <label htmlFor="password-input">
        Senha:
        <input
          data-testid="password-input"
          id="password-input"
          // value={ }
          name="password"
          type="password"
        />
      </label>

      <button
        data-testid="login-submit-btn"
        type="submit"
      >
        Enter
      </button>

    </form>
  );
}

export default Login;
