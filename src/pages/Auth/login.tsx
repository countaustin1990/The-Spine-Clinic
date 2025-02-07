import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuth } from "../../context/FirebaseAuthProvider";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateField = (name: string, value: string) => {
    let errorMessage = "";

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

    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    validateField(e.target.name, e.target.value);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  const isFormValid =
    !errors.email && !errors.password && formData.email && formData.password;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit min-w-[420px] w-1/3 space-y-8 px-10 py-8 pb-14 border border-slate-500 rounded-lg">
        <h3 className="font-bold text-4xl text-slate-700 text-center">Login</h3>
        <form onSubmit={handleLogin} className="space-y-6 w-full">
          <div>
            <Input
              label="Email"
              name="email"
              type="email"
              error={errors.email}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <Input
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              showPassword={showPassword}
              togglePassword={toggleShowPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              value={formData.password}
              placeholder="********"
            />
          </div>

          <Button disabled={!isFormValid} type="submit">
            Submit
          </Button>
        </form>
        <p className="text-center text-slate-700 font-semibold">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer text-slate-500 hover:underline font-bold"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
