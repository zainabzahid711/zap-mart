"use client";

import { useState } from "react";
import Heading from "../components/heading";
import Input from "../components/inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };
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
        outline
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
    </>
  );
};
export default LoginForm;
