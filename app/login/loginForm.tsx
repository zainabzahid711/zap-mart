"use client";

import React, { useEffect, useState } from "react";
import Heading from "../components/heading";
import Input from "../components/inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { SafeUser } from "@/types";

interface LoginFromProps {
  currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginFromProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const fields = [
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password", type: "password" },
  ];

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, [currentUser, router]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged in successfully");
      } else {
        toast.error(callback?.error || "Login failed");
      }
    });
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/cart" });
  };

  if (currentUser) {
    return <p className="text-center">Logged In. Redirecting...</p>;
  }

  return (
    <>
      <Heading title="sign In To zapMart" />
      <hr className="bg-slate-50 w-full h-px" />
      {fields.map((item) => (
        <Input
          key={item.id}
          id={item.id}
          label={item.label}
          type={item.type}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      ))}
      <Button
        outline
        label={isLoading ? "loading" : "Sign In"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className=" text-sm">
        Do not have an account
        <Link className="underline text-borderColor ml-3" href={"/register"}>
          Register
        </Link>
      </p>
      <hr className="bg-slate-50 w-full h-px" />

      <Button
        transparent
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={handleGoogleSignIn}
      />
    </>
  );
};
export default LoginForm;
