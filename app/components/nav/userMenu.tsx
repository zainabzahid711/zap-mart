"use client";

import { useCallback, useState } from "react";
import Avatar from "../avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItems from "./menuItems";
import { signOut } from "next-auth/react";
import BackDrop from "./backdrop";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser: SafeUser | null;
  // const currentUser: SafeUser | null = user
  //   ? {
  //       ...user,
  //       createdAt: user.createdAt.toISOString(),
  //       updatedAt: user.updatedAt.toISOString(),
  //       emailVerified: user.emailVerified ? user.emailVerified.toISOString() : null,
  //     }
  //   : null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSignOut = () => {
    signOut({
      redirect: false,
    })
      .then(() => {
        console.log("Sign out successful");
        router.push("/login");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="p-2 border-[1px] border-brownColor flex flex-row items-center w-[90px]
           justify-center gap-1 rounded-full cursor-pointer hover:shadow-custom transition text-slate-400"
        >
          <Avatar />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div
            className="absolute rounded-md shadow-md w-[170px] bg-brownColor overflow-hidden 
          right-0 top-12 text-sm flex flex-col cursor-pointer"
          >
            {currentUser ? (
              <div>
                <Link href="/orders">
                  <MenuItems onClick={toggleOpen}>Your Orders</MenuItems>
                </Link>
                <Link href="/admin">
                  <MenuItems onClick={toggleOpen}>Your Admin</MenuItems>
                </Link>
                <hr />
                <MenuItems
                  onClick={() => {
                    handleSignOut();
                    toggleOpen();
                  }}
                >
                  Sign Out
                </MenuItems>
              </div>
            ) : (
              <div>
                <Link href="/register">
                  <MenuItems onClick={toggleOpen}>Register</MenuItems>
                </Link>
                <Link href="/login">
                  <MenuItems onClick={toggleOpen}>Login</MenuItems>
                </Link>
                {/* <MenuItems
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Sign Out
                </MenuItems> */}
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
