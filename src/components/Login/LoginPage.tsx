import { useState } from "react";
import { LoginContainer, LoginForm, Input, Button, ErrorMsg,  Logo} from "./styledComponents";
import {Theme, lightTheme, darkTheme} from '../../types/theme'


import lightLogo from '../../assets/nxt-watch-logo-light-theme-img.png';
import darkLogo from '../../assets/nxt-watch-logo-dark-theme-img.png';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg] = useState('');
  const [theme] = useState('light'); 

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

  };

  return (
    <LoginContainer theme={theme}>
      <LoginForm onSubmit={handleSubmit} theme={theme}>
      <Logo src={theme === 'light' ? lightLogo : darkLogo} alt="NXT Watch" />
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="USERNAME"
        />
        <Input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
        />
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          Show Password
        </label>
        <Button type="submit">Login</Button>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
