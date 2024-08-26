"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import logo from "../../../../public/images/logo.png";

function Page() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });

      const text = await response.text();
      // console.log("Raw response:", text);

      if (!response.ok) {
        if (text.includes("Email already exists")) {
          Swal.fire({
            icon: "warning",
            title: "Email already exists",
            text: "The email you entered is already registered. Please use different Email.",
          });
        } else {
          throw new Error(text || "Registration failed. Please try again.");
        }
        return;
      }

      const data = JSON.parse(text);
      // console.log("Parsed response:", data);
      setSuccess("Registration successful!");
      setError("");

      localStorage.setItem("username", username);

      Swal.fire({
        icon: "success",
        title: "Registration successful",
        text: "You have been successfully registered.",
      }).then(() => {
        router.push("/");
      });

      setEmail("");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error during registration:", error);
      setError(error.message);
      setSuccess("");

      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "Registration failed, please fill the form to complete the registration process!",
      });
    }
  };

  return (
    <section>
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
      <div className="container mx-auto md:py-10 py-0 px-6">
        <div className="bg-white rounded-md py-6 md:px-24 px-5 md:max-w-6xl mx-auto my-14">
          <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium">Registration</h1>
          <p className="text-center py-3 text-gray-400">By registering, you agree to the terms and conditions of Imani Hacking.</p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <div className=" py-8">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input className="border rounded-md w-full p-2 mt-3 bg-white" type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col py-5">
              <label className="font-semibold" htmlFor="username">
                Username
              </label>
              <input className="border rounded-md w-full p-2 mt-3 bg-white" type="text" placeholder="Enter Your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col py-5">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input className="border rounded-md w-full p-2 mt-3 bg-white" type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="">
            <div className="w-5/12 mx-auto">
              <button className="bg-blue-400 rounded-md text-white py-2 w-full px-5 text-center my-5" onClick={handleRegister}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
