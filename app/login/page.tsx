import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/container";
import FormWrap from "../components/formWrap";
import LoginForm from "./loginForm";
import { SafeUser } from "@/types";

const Login = async () => {
  // const currentUser = await getCurrentUser();
  let currentUser: SafeUser | null = null;
  try {
    const user = await getCurrentUser();

    // Example transformation (adjust based on actual SafeUser definition)
    currentUser = user
      ? ({
          ...user,
          emailVerified: user.emailVerified
            ? new Date(user.emailVerified)
            : null,
          createdAt: new Date(user.createdAt),
          updatedAt: new Date(user.updatedAt),
        } as SafeUser)
      : null;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    currentUser = null;
  }

  return (
    <>
      <Container>
        <FormWrap>
          <LoginForm currentUser={currentUser} />
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
