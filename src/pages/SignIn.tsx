import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import googleLogo from "../assets/google-logo.jpg"; 
import Lottie from "lottie-react";
import authAnimation from "../assets/Login.json"; 
import logo from "../assets/kenguro-logo.jpg";

interface User {
  name: string;
  email: string;
  password?: string; 
}

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const registeredUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = registeredUsers.find(user => user.email === email && user.password === password);

    if (foundUser) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", JSON.stringify({ name: foundUser.name, email: foundUser.email }));
      navigate("/profile");
      window.location.reload();
    } else {
      setError(t('signin.error')); 
    }
  };

  // Google-ით "შესვლის" სიმულაცია
  const handleGoogleSignIn = () => {
    const googleUser = { name: "Google User", email: "user@google.com" };
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("currentUser", JSON.stringify(googleUser));
    navigate("/profile");
    window.location.reload();
  };

   const handleGuestSignIn = () => {
    navigate("/");
  };


  return (
    <div className="min-h-screen bg-header-gradient-light dark:bg-header-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex flex-col items-center bg-primary-light dark:bg-secondary rounded-2xl shadow-2xl overflow-hidden">
        <div className="w-full flex items-center justify-center gap-10 my-4"> 
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
          <h1 className="text-3xl font-bold text-text-main dark:text-text-light">{t('signin.title')}</h1>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 p-8 sm:p-12">
            <p className="text-text-main dark:text-gray-400 mb-8">{t('signin.subtitle')}</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main dark:text-gray-300 mb-2">
                  {t('signin.emailLabel')}
                </label>
                <input 
                  id="email" type="email" required 
                  className="w-full px-4 py-3 border border-border-color rounded-lg bg-light-gray dark:bg-primary-darkest dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent" 
                  value={email} onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text-main dark:text-gray-300 mb-2">
                  {t('signin.passwordLabel')}
                </label>
                <input 
                  id="password" type="password" required 
                  className="w-full px-4 py-3 border border-border-color rounded-lg bg-light-gray dark:bg-primary-darkest dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent" 
                  value={password} onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember" name="remember" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary-light border-gray-300 rounded" />
                  <label htmlFor="remember" className="ml-2 block text-sm text-text-main dark:text-gray-300">{t('signin.rememberMe')}</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-text-yellow hover:text-text-lightYellow dark:hover:text-primary-dark dark:text-primary-light">{t('signin.forgotPassword')}</a>
                </div>
              </div>

              {error && <p className="text-sm text-error text-center">{error}</p>}

              <div>
                <button type="submit" className="w-full py-3 font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-colors duration-300">
                  {t('signin.button')}
                </button>
              </div>

              <button onClick={handleGoogleSignIn} type="button" className="w-full py-3 font-semibold text-text-main dark:text-text-light bg-white border border-border-color rounded-lg hover:bg-light-gray dark:bg-secondary dark:hover:bg-primary-darkest flex items-center justify-center transition-colors duration-300">
                <img src={googleLogo} alt="Google Logo" className="w-5 h-5 mr-3" />
                {t('signin.googleButton')}
              </button>
              <button
                onClick={handleGuestSignIn}
                type="button"
                className="w-full py-3 font-semibold text-text-main dark:text-text-light bg-white border border-border-color rounded-lg hover:bg-light-gray dark:bg-secondary dark:hover:bg-primary-darkest flex items-center justify-center transition-colors duration-300"
              >
                {t("signin.asGuestButton")}
              </button>
            </form>

            <p className="mt-8 text-sm text-center text-text-main dark:text-gray-400">
              {t('signin.noAccount')}{" "}
              <Link to="/signup" className="font-medium text-text-yellow hover:text-text-lightYellow dark:text-primary-light hover:underline">
                {t('signin.signUpLink')}
              </Link>
            </p>
          </div>

          <div className="hidden md:flex w-1/2 bg-primary-light dark:bg-primary-darkest items-center justify-center p-12">
            <Lottie animationData={authAnimation} loop={true} className="w-full h-auto"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignIn;