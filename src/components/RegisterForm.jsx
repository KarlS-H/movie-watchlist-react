import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const existingUser = JSON.parse(localStorage.getItem(data.email));
    if (existingUser) {
      console.log("Email is already registered");
    } else {
      const userData = {
        name: data.username,
        email: data.email,
        password: data.password,
      };
      localStorage.setItem(data.email, JSON.stringify(userData));
      console.log(data.name + " has been successfully registered");
    }
  };

  return (
    <>
      <h2>Registration Form</h2>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        {errors.username && (
          <span style={{ color: "red" }}>Username is mandatory</span>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <span style={{ color: "red" }}>Email is mandatory</span>
        )}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && (
          <span style={{ color: "red" }}>Password is mandatory</span>
        )}
        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
