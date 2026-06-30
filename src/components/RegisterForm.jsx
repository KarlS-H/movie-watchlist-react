import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const url = "https://auth-api-4b1q.onrender.com/auth/register";

  const onSubmit = async (data) => {
    try {
      const existingUser = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      });
      if (!existingUser.ok) {
        const errorData = await existingUser.json().catch(() => ({}));
        console.error("Backend Validation Eroor:", errorData);

        throw new Error(`Response Status: ${existingUser.status}`);
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
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
