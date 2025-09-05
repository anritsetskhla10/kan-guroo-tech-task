import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiUser } from 'react-icons/fi'; 
import ProfileImg from '../assets/profile.jpg'; 

interface CurrentUser {
  name: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
      setUser(JSON.parse(currentUserData));
    }
  }, []);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        {t('common.loading')}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white font-sans">
      <div className="hidden lg:flex w-1/3 flex-col items-center justify-center bg-gray-800 text-white p-12 text-center">
        <img
          src={ProfileImg}
          alt="User Avatar"
          className="w-48 h-48 rounded-full border-4 border-gray-700 shadow-xl"
        />
        <h2 className="mt-6 text-3xl font-bold">{user.name}</h2>
        <p className="mt-2 text-gray-400">{t('profilePage.greeting')}</p>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col justify-center p-8 sm:p-12">
        <div className="w-full max-w-md mx-auto">

          <div className="lg:hidden text-center mb-10">
            <img
              src={ProfileImg}
              alt="User Avatar"
              className="w-32 h-32 mx-auto rounded-full border-4 border-gray-200 shadow-lg"
            />
            <h2 className="mt-4 text-3xl font-bold text-gray-800">{user.name}</h2>
            <p className="mt-1 text-gray-500">{t('profilePage.greeting')}</p>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800">{t('profilePage.title')}</h1>
          <p className="mt-2 text-gray-600">{t('profilePage.subtitle')}</p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                <FiUser size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('profilePage.nameLabel')}</p>
                <p className="text-lg font-semibold text-gray-800">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                <FiMail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('profilePage.emailLabel')}</p>
                <p className="text-lg font-semibold text-gray-800">{user.email}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;