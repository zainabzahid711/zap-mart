import Container from "../components/container";
import FormWrap from "../components/formWrap";
import RegisterForm from "./registerForm";

const Register = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <RegisterForm />
        </FormWrap>
      </Container>
    </>
  );
};

export default Register;
