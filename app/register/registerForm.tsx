"use client";

import { useEffect, useState } from "react";
import Heading from "../components/heading";
import Input from "../components/inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface RegisterFromProps {
  currentUser: SafeUser | null;
}

const RegisterForm: React.FC<RegisterFromProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const router = useRouter();

  const fields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password", type: "password" },
  ];

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, [currentUser, router]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    console.log(data);

    try {
      const registerResponse = await axios.post("/api/register", data);
      if (registerResponse.status === 201 || registerResponse.status === 200) {
        toast.success("Account created successfully");

        const signInResponse = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (signInResponse?.ok) {
          router.push("/cart");
          router.refresh();
          toast.success("Logged in successfully");
        } else {
          toast.error(signInResponse?.error || "Login failed");
        }
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error: any) {
      // Explicitly type the error
      console.error("Error during registration or login:", error);
      if (error.response) {
        // Handle known errors (e.g., validation issues, user already exists)
        toast.error(
          error.response.data?.message ||
            "An error occurred during registration",
        );
      } else {
        // Handle generic or network errors
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/cart" });
  };

  if (currentUser) {
    return <p className="text-center">Logged In. Redirecting...</p>;
  }
  return (
    <>
      <Heading title="sign up" />
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
        label={isLoading ? "loading" : "Sign up"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className=" text-sm">
        Already have an account
        <Link className="underline text-borderColor ml-3" href={"/login"}>
          Login
        </Link>
      </p>
      <hr className="bg-slate-50 w-full h-px" />

      <Button
        outline
        label="Sign In with Google"
        icon={AiOutlineGoogle}
        onClick={() => {
          handleGoogleSignIn();
        }}
      />
    </>
  );
};
export default RegisterForm;
