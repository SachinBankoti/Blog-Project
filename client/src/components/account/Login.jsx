import React, { useState } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { API } from "../../services/api";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;
const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const loginInitialValues = {
  username: '',
  password: '',
}

const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const [account, setAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const[login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState("");

  const toggleSignup = () => {
    account === "signup" ? setAccount("login") : setAccount("signup");
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupInitialValues);
      setAccount("login");
    } else {
      setError("Something went wrong please try again later");
    }
  };
const onValueChange =(e)=>{
  setLogin({ ...login, [e.target.name]: e.target.value });
}
const loginUser=()=>{
  let response = API.userLogin(login);
  if(response.isSuccess){
    setError('');
  }else{
    setError('Please try again later')
  }
}
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField label="Enter username" value={login.username} onChange={(e)=>onValueChange(e)} name="username" variant="standard" />
            <TextField label="Enter password" value={login.password} onChange={(e)=>onValueChange(e)} name="password" variant="standard" />
            {error && <Error>{error}</Error>}
            <LoginButton onClick={()=>loginUser()} variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton onClick={() => toggleSignup()} variant="text">
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter Name"
              variant="standard"
            />
            <TextField
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
              variant="standard"
            />
            <TextField
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
              variant="standard"
            />
            {error && <Error>{error}</Error>}
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton onClick={() => toggleSignup()} variant="contained">
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
