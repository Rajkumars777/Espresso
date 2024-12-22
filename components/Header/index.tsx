'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Docs from "../Docs";
import AuthButtons from "../AuthButtons";
import { ThemeToggler } from '../ThemeToggler';

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [reloadTriggered, setReloadTriggered] = useState(true);
  const pathUrl = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/auth/user", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Not authenticated");
        }

        const content = await response.json();
        setIsLogin(true);
      } catch (e) {
        setIsLogin(false);
      }
    };

    fetchUser();
  }, [router]);

  useEffect(() => {
    if (!reloadTriggered) {
      setReloadTriggered(true);
      window.location.reload();
    }
  }, [isLogin, reloadTriggered]);

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3001/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setIsLogin(false);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
    return () => {
      window.removeEventListener('scroll', handleStickyMenu);
    };
  }, []);
  const getTextColorClasses = (isActive: boolean) => {
    return `
      transition-colors duration-300 
      dark:text-white 
      xl:${stickyMenu ? 'text-black' : 'text-white'}
      max-xl:text-black
      ${isActive ? "text-primary" : "hover:text-primary"}
    `;
  };
  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7
      ${stickyMenu 
        ? "backdrop-blur-md bg-white/70 !py-4 transition-all duration-300 ease-in-out dark:bg-black/20" 
        : "bg-transparent"}
      transition-all duration-300 ease-in-out`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/log.png"
              alt="logo"
              width={119.03}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/log.png"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
          </a>

          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm delay-[0] duration-200 ease-in-out bg-blue-600 ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm delay-150 duration-200 ease-in-out bg-blue-600 ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm delay-200 duration-200 ease-in-out bg-blue-600 ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm delay-300 duration-200 ease-in-out bg-blue-600 ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm duration-200 ease-in-out bg-blue-600 ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              <li>
                <Link
                  href="/"
                  className={`transition-colors duration-300 dark:text-white ${
                    stickyMenu ? 'text-black' : 'text-white'
                  } ${pathUrl === "/" ? "text-primary" : "hover:text-primary"}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`transition-colors duration-300 dark:text-white ${
                    stickyMenu ? 'text-black' : 'text-white'
                  } ${pathUrl === "/blog" ? "text-primary" : "hover:text-primary"}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className={`transition-colors duration-300 dark:text-white ${
                    stickyMenu ? 'text-black' : 'text-white'
                  } ${pathUrl === "/#features" ? "text-primary" : "hover:text-primary"}`}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`transition-colors duration-300 dark:text-white ${
                    stickyMenu ? 'text-black' : 'text-white'
                  } ${pathUrl === "/about" ? "text-primary" : "hover:text-primary"}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#support"
                  className={`transition-colors duration-300 dark:text-white ${
                    stickyMenu ? 'text-black' : 'text-white'
                  } ${pathUrl === "/support" ? "text-primary" : "hover:text-primary"}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />
            <AuthButtons isLogin={isLogin} onLogout={logout} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;