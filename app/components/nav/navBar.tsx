import Link from "next/link";
import Container from "../container";
import { Redressed } from "next/font/google";
import CartCount from "./cartCount";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
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
                <div>Usermenu</div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default NavBar;
