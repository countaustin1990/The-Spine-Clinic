import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/FirebaseAuthProvider.tsx";
import Button from "../../components/ui/button.tsx";
import Input from "../../components/ui/input.tsx";

const Signup = () => {
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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleShowPassword = (field: "password" | "confirmPassword") => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const validateField = (name: string, value: string) => {
    let errorMessage = "";

    if (name === "name") {
      if (!value) {
        errorMessage = "Name is required";
      } else {
        const nameParts = value.trim().split(" ");

        if (nameParts.length !== 2) {
          errorMessage = "Enter first and last name";
        } else if (nameParts.some((part) => part.length < 3)) {
          errorMessage = "Each name must be at least 3 characters";
        }
      }
    }

    if (name === "email") {
      if (!value) {
        errorMessage = "Email is required";
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        errorMessage = "Invalid email format";
      }
    }

    if (name === "password") {
      if (!value) {
        errorMessage = "Password is required";
      } else if (value.length < 6) {
        errorMessage = "Password must be at least 6 characters";
      }
    }

    if (name === "confirmPassword") {
      if (!value) {
        errorMessage = "Confirm Password is required";
      } else if (value !== formData.password) {
        errorMessage = "Passwords do not match";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err !== "")) return; // Prevent submission if errors exist
    signup(formData.email, formData.password);
  };

  const isFormValid =
    !errors.name &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    formData.name &&
    formData.email &&
    formData.password &&
    formData.confirmPassword;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit min-w-[420px] w-1/3 space-y-8 px-10 py-5 pb-8 border border-slate-500 rounded-lg">
        <h3 className="font-bold text-4xl text-slate-700 text-center">
          Sign Up
        </h3>
        <form onSubmit={handleSignup} className="space-y-4 w-full">
          <div>
            <Input
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              placeholder="John Doe"
            />
          </div>

          <div>
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <Input
              label="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              type={showPassword.password ? "text" : "password"}
              showPassword={showPassword.password}
              togglePassword={() => toggleShowPassword("password")}
              value={formData.password}
              placeholder="********"
            />
          </div>

          <div>
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
              showPassword={showPassword.confirmPassword}
              togglePassword={() => toggleShowPassword("confirmPassword")}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword}
              value={formData.confirmPassword}
              placeholder="********"
            />
          </div>

          <Button disabled={!isFormValid} type="submit">
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
