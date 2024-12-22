import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

interface AuthButtonsProps {
  isLogin: boolean;
  onLogout: () => void; // Function to handle logout
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ isLogin, onLogout }) => {
  const { t } = useTranslation();
  const [localIsLogin, setLocalIsLogin] = useState(isLogin);

  // Update local state when isLogin prop changes
  useEffect(() => {
    setLocalIsLogin(isLogin);
  }, [isLogin]);

  const handleLogout = async () => {
    try {
      await onLogout();
      setLocalIsLogin(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (localIsLogin) {
    return (
      <div className="flex items-center gap-4">
        {/* Example Profile Menu */}
        <button className="text-regular font-medium text-waterloo dark:fill-white hover:text-primary">
          {t("profile")}
        </button>
        <button
          onClick={handleLogout}
          className="text-regular font-medium text-waterloo dark:fill-white hover:text-primary"
        >
          {t("logout")}
        </button>
      </div>
    );
  }

  return (
    <>
      <Link
        href="/auth/signin"
        className="text-regular font-medium text-white dark:fill-white hover:text-primary"
      >
        {t("login")}
      </Link>

      <Link
        href="/auth/signup"
        className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white dark:fill-white duration-300 ease-in-out hover:bg-primaryho"
      >
        {t("signup")}
      </Link>
    </>
  );
};

export default AuthButtons;