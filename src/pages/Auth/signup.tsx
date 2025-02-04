import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Input from "../../components/input.tsx";
import Button from "../../components/button.tsx";

type Props = {};

const Signup = (props: Props) => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleShowPassword = (v: "password" | "confirmPassword") =>
    setShowPassword((prev) => ({ ...prev, [v]: !prev[v] }));

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    signup(formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit min-w-[420px] w-1/3 space-y-8 px-10 py-5 pb-8 border border-slate-500 rounded-lg">
        <h3 className="font-bold text-4xl text-slate-700 text-center">
          Sign Up
        </h3>
        <form onSubmit={handleSignup} className="space-y-4 w-full">
          <Input
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
          <Input
            label="Password"
            name="password"
            onChange={handleChange}
            type={showPassword.password ? "text" : "password"}
            showPassword={showPassword.password}
            togglePassword={() => toggleShowPassword("password")}
            value={formData.password}
            placeholder="********"
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type={showPassword.confirmPassword ? "text" : "password"}
            showPassword={showPassword.confirmPassword}
            togglePassword={() => toggleShowPassword("confirmPassword")}
            onChange={handleChange}
            value={formData.confirmPassword}
            placeholder="********"
          />
          <Button
            disabled={
              formData.name == "" ||
              formData.email == "" ||
              formData.password == "" ||
              formData.confirmPassword == ""
            }
            type="submit"
          >
            Submit
          </Button>
        </form>
        <p className="text-center text-slate-700 font-semibold">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-slate-500 hover:underline font-bold"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
