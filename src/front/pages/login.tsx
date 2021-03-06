import React from 'react';
import styled from 'styled-components';

const StyledAppleLoginButton = styled.div`
  background-color: #fff;
  width: 260px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 24px 0 0;

  & > img {
    width: 22px;
    height: 22px;
    background-color: #fff;
  }

  & > div {
    font-size: 14px;
    background-color: #fff;
  }
`;

const Login: React.FC = () => {
  return (
    <div>
      <img src="/assets/images/motiLogo.png" alt="motiLogo" width="50%" className="mt-26" />
      <div className="d-flex flex-column align-items-center">
        <a
          href={`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=${
            process.env.NODE_ENV === 'production' ? 'https://miracle-morning.herokuapp.com' : 'http://localhost:8000'
          }/api/google&response_type=code&client_id=7285692333-qmhvecvas3164p3itd7qdahmdl9cbh76.apps.googleusercontent.com`}>
          <StyledAppleLoginButton>
            <img src="/assets/images/icApple.png" alt="icApple" />
            <div>Sign in with google</div>
          </StyledAppleLoginButton>
        </a>
        <div className="mt-6">By creating an account you are agreeing to</div>
        <a
          className="mt-2"
          href="https://www.notion.so/MOTI-35d01dd331bb4aa0915c33d28d60b63c"
          target="_blank"
          rel="noreferrer">
          MOTI&apos;s User Agreement
        </a>
      </div>
      <div className="h6 my-6 text-center">Make Own True Identity</div>
    </div>
  );
};

export default Login;
