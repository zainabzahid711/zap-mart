"use client";

import { useState } from "react";
import Heading from "../components/heading";
import Input from "../components/inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/button";
import Link from "next/link";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const fields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password", type: "password" },
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };
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
      <p className="underline text-sm">
        <Link href={"/login"}>Already have an account</Link>
      </p>
    </>
  );
};
export default RegisterForm;
