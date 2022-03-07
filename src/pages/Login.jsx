import React, { useState } from 'react';

function Login() {
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();

  const handleInputChange = ({ target }, setter) => {
    setter(target.value);
  };

  return (
    <form onSubmit={ (e) => e.preventDefault() }>
      <label htmlFor="email-input">
        E-mail:
        <input
          data-testid="email-input"
          id="email-input"
          value={ inputEmail }
          name="email"
          onChange={ (e) => { handleInputChange(e, setInputEmail); } }
          type="email"
        />
      </label>

      <label htmlFor="password-input">
        Senha:
        <input
          data-testid="password-input"
          id="password-input"
          value={ inputPassword }
          onChange={ (e) => { handleInputChange(e, setInputPassword); } }
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
