"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

type SignupData = {
  username: string;
  email: string;
  password: string;
};

type Message = {
  type: "success" | "error";
  text: string;
};

const Signup = () => {
  const [data, setData] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<Message | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions

    // Simple validation (you can extend it as needed)
    if (!data.username || !data.email || !data.password) {
      setMessage({ type: "error", text: "All fields are required!" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: result.message });
        setData({ username: "", email: "", password: "" }); // Clear form
      } else {
        setMessage({ type: "error", text: result.message });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
        >
          <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            Create an Account
          </h2>

          <form onSubmit={handleSignup}>
            <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
              <div className="w-full">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="User name"
                  value={data.username}
                  onChange={handleChange}
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-none dark:border-strokedark lg:w-1/2"
                />
              </div>
            </div>

            <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-none dark:border-strokedark lg:w-1/2"
                />
              </div>

              <div className="w-full">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus-visible:outline-none dark:border-strokedark lg:w-1/2"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
            >
              {loading ? (
                <span className="animate-spin">⏳</span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {message && (
            <div
              className={`mt-4 text-center ${message.type === "success" ? "text-green-500" : "text-red-500"}`}
            >
              {message.text}
            </div>
          )}

          <div className="mt-12.5 border-t border-stroke py-5 text-center dark:border-strokedark">
            <p>
              Already have an account?{" "}
              <Link
                className="text-black hover:text-primary dark:text-white dark:hover:text-primary"
                href="/auth/signin"
              >
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Signup;
