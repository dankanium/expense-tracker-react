import { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
    document.getElementById('login-modal').style.display = 'block';
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };

  const handleGitHubLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/github';
  };

  return (
    <div id="login-modal" style={{ display: 'none' }}>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleGitHubLogin}>Login with GitHub</button>
    </div>
  );
};

export default LoginPage;