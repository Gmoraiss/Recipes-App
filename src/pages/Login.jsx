import React, { useEffect, useState } from 'react';

function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const MIN_LENGTH = 6;

  useEffect(() => {
    setBtnDisabled(!(inputEmail
      .includes('@') && inputEmail
      .includes('.com') && inputPassword.length > MIN_LENGTH));
  }, [inputEmail, inputPassword]);

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
        disabled={ btnDisabled }
        data-testid="login-submit-btn"
        type="submit"
      >
        Enter
      </button>

    </form>
  );
}

export default Login;
