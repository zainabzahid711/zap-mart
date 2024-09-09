import Link from "next/link";
import Container from "../container";
import { Redressed } from "next/font/google";
import CartCount from "./cartCount";
import UserMenu from "./userMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { SafeUser } from "@/types";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
  const userResponse = await getCurrentUser();

  //Convert string dates to Date objects
  const currentUser: SafeUser | null = userResponse
    ? {
        ...userResponse,
        createdAt: new Date(userResponse.createdAt),
        updatedAt: new Date(userResponse.updatedAt),
        emailVerified: userResponse.emailVerified
          ? new Date(userResponse.emailVerified)
          : null,
      }
    : null;

  console.log("user<<<<", currentUser);

  return (
    <>
      <div className="sticky top-0 w-full bg-navblue z-30 shadow-sm">
        <div className="py-5 border-b-[1px]">
          <Container>
            <div className="flex items-center justify-between gap-12 md:gap-0">
              <Link
                href="/"
                className={`${redressed.className} text-center font-bold text-4xl `}
              >
                zapmart
              </Link>
              <div className="hidden md:block">Search</div>
              <div className="flex items-center gap-8 md:gap-12 ">
                <CartCount />
                {currentUser ? (
                  <UserMenu currentUser={currentUser} />
                ) : (
                  <Link href="/login" className="text-sm font-medium">
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default NavBar;
