import Container from "../components/container";
import FormWrap from "../components/formWrap";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <LoginForm />
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
