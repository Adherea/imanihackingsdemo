"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username: email, 
          password,
        }),
      });

      console.log("Status Code:", response.status);
      const text = await response.text();
      console.log("Raw response:", text);

      if (!response.ok) {
        throw new Error(text || "Login failed. Please try again.");
      }

      const data = JSON.parse(text);
      console.log("Parsed response:", data);

      localStorage.setItem("username", data.username);

      Swal.fire({
        icon: "success",
        title: "Login successful",
        text: "You have been successfully logged in.",
      }).then(() => {
        router.push("/");
      });
    } catch (error) {
      console.error("Error during login:", error);

      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: error.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "An unknown error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="flex items-center text-white justify-between md:px-12 px-5 text-xl bg-[#79c9e0]">
        <div>
          <Image src={logo} width={140} alt="logo" />
        </div>
        <div>
          <ul className="w-fit mx-auto">
            <li>
              <Link href="/" className="group relative text-center">
                Back To Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container  mx-auto my-20 px-4">
        <div className="md:max-w-2xl mx-auto bg-white p-8 border border-gray-300 rounded-md ">
          <h1 className="text-2xl font-bold text-center mb-4 md:pb-6 pb-3">Login</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 md:text-xl text-lg" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2 md:text-xl text-lg" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handleLogin} className={`w-full bg-blue-500 text-white py-2 rounded-md font-bold ${loading ? "opacity-50" : ""}`} disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
          <p className="text-center py-4">
            Don't have an account yet?{" "}
            <Link href={"/register"} className="text-blue-400 hover:underline">
              Create one!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
