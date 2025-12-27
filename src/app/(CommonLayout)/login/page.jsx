"use client";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user.context";

const Login = () => {
  const {  setUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // login
    if (email === "sabbirtanvirahmed18@gmail.com" && password === "1234") {
      const currentUser = {
        email,
        name: email.split("@")[0],
      };

      setUser(currentUser);
      alert("Login successful");
      router.push("/dashboard");
    } else {
      alert("Credential invalid!");
      setUser(null);
    }
  };

  const handleGoogleLogin = () => {
    alert("Google login coming soon ");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login to Care.xyz
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <button className="w-full py-2 bg-primary text-white rounded-lg">
            Login
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="text-primary font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
