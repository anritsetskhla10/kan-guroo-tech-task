import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import authAnimation from "../assets/register.json";
import logo from "../assets/kenguro-logo.jpg";

interface User { name: string; email: string; password: string; }

const SignUp: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 6) {
      setError(t('signup.passwordError'));
      return;
    }
    const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (existingUsers.some(user => user.email === email)) {
      setError(t('signup.emailExistsError'));
      return;
    }
    const newUser: User = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Account created successfully!");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-header-gradient-light dark:bg-header-gradient flex items-center justify-center p-4">
     <div className="w-full max-w-5xl flex flex-col items-center bg-primary-light dark:bg-secondary rounded-2xl shadow-2xl overflow-hidden">
        <div className="w-full flex items-center justify-center gap-10 my-4">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
          <h1 className="text-3xl font-bold text-text-main dark:text-text-light mb-2">{t('signup.title')}</h1>
        </div>
        <div className="flex flex-col md:flex-row w-full">  
          <div className="w-full md:w-1/2 p-8 sm:p-12">
            <p className="text-text-main dark:text-gray-400 mb-8">{t('signup.subtitle')}</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-main dark:text-gray-300 mb-2">{t('signup.nameLabel')}</label>
                <input id="name" type="text" required className="w-full px-4 py-3 border border-border-color rounded-lg bg-light-gray dark:bg-primary-darkest dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main dark:text-gray-300 mb-2">{t('signup.emailLabel')}</label>
                <input id="email" type="email" required className="w-full px-4 py-3 border border-border-color rounded-lg bg-light-gray dark:bg-primary-darkest dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text-main dark:text-gray-300 mb-2">{t('signup.passwordLabel')}</label>
                <input id="password" type="password" required className="w-full px-4 py-3 border border-border-color rounded-lg bg-light-gray dark:bg-primary-darkest dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              
              {error && <p className="text-sm text-error text-center">{error}</p>}

              <div>
                <button type="submit" className="w-full py-3 font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-colors duration-300">
                  {t('signup.button')}
                </button>
              </div>
            </form>

            <p className="mt-8 text-sm text-center text-text-main dark:text-gray-400">
              {t('signup.hasAccount')}{" "}
              <Link to="/signin" className="font-medium text-text-yellow hover:text-text-lightYellow dark:text-primary-light hover:underline">
                {t('signup.signInLink')}
              </Link>
            </p>
          </div>

          <div className="hidden md:flex w-1/2 bg-primary-lightest/30 dark:bg-primary-darkest/50 items-center justify-center p-12">
            <Lottie animationData={authAnimation} loop={true} className="w-full h-auto"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;