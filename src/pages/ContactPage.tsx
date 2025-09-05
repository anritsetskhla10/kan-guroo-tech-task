import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail, FiCalendar } from 'react-icons/fi';
import { fadeInUp } from '../components/SectionTitle';
import { staggeredContainer } from '../constants/AboutInfo';
import { useTranslation } from 'react-i18next'; 
import SocialLinks from '../components/SocialLinks';

const ContactPage = () => {
  const { t } = useTranslation(); 
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {/* Hero სექცია */}
      <section className="relative bg-primary py-20 text-center text-white">
        <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] z-50"></div>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold">{t('contactPage.hero.title')}</h1>
          <p className="max-w-2xl mx-auto mt-4 text-primary-lightest">
            {t('contactPage.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* მთავარი კონტენტი */}
      <section className="py-16 md:py-24 px-4 bg-primary-mintgreen dark:bg-primary-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            
          {/* მარცხენა სვეტი: საკონტაქტო ფორმა */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-text-main mb-2">{t('contactPage.form.title')}</h2>
            <p className="text-text-secondary mb-8">
              {t('contactPage.form.subtitle')}
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <motion.div 
                variants={staggeredContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={fadeInUp}>
                  <label htmlFor="from_name" className="block text-sm font-medium text-text-secondary mb-1">{t('contactPage.form.nameLabel')}</label>
                  <input type="text" name="from_name" id="from_name" required className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-primary focus:border-primary" placeholder={t('contactPage.form.namePlaceholder')} />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label htmlFor="from_email" className="block text-sm font-medium text-text-secondary mb-1">{t('contactPage.form.emailLabel')}</label>
                  <input type="email" name="from_email" id="from_email" required className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-primary focus:border-primary" placeholder={t('contactPage.form.emailPlaceholder')} />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label htmlFor="from_phone" className="block text-sm font-medium text-text-secondary mb-1">{t('contactPage.form.phoneLabel')}</label>
                  <input type="tel" name="from_phone" id="from_phone" required className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-primary focus:border-primary" placeholder={t('contactPage.form.phonePlaceholder')} />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">{t('contactPage.form.messageLabel')}</label>
                  <textarea name="message" id="message" rows={5} required className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-primary focus:border-primary" placeholder={t('contactPage.form.messagePlaceholder')}></textarea>
                </motion.div>
              </motion.div>
              <motion.button
                variants={fadeInUp}
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 disabled:bg-primary-lightest"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? t('contactPage.form.submittingButton') : t('contactPage.form.submitButton')}
              </motion.button>
              {submitStatus === 'success' && <p className="mt-4 text-center text-success">{t('contactPage.form.successMessage')}</p>}
              {submitStatus === 'error' && <p className="mt-4 text-center text-error">{t('contactPage.form.errorMessage')}</p>}
            </form>
          </motion.div>

          {/* მარჯვენა სვეტი: საკონტაქტო ინფორმაცია */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-secondary p-8 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-bold mb-1">{t('contactPage.info.title')}</h3>
            <div className="w-16 h-1 bg-primary mb-8 rounded"></div>
            <motion.div 
                variants={staggeredContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center">
                <FiPhone className="text-text-yellow dark:text-primary-light text-2xl mr-4"/>
                <div>
                  <h4 className="font-semibold text-text-yellow hover:text-text-lightYellow dark:text-primary-light">{t('contactPage.info.phoneTitle')}</h4>
                  <a href="tel:+995577302525" className="text-text-yellow hover:text-text-lightYellow dark:text-primary-light hover:underline">+995 577 30 25 25</a>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center">
                <FiMail className="text-text-yellow dark:text-primary-light text-2xl mr-4"/>
                <div>
                  <h4 className="font-semibold text-text-yellow hover:text-text-lightYellow dark:text-primary-light">{t('contactPage.info.emailTitle')}</h4>
                  <a href="mailto:info@kan-guroo.com" className="text-text-yellow hover:text-text-lightYellow dark:text-primary-light hover:underline">info@kan-guroo.com</a>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center">
                <FiCalendar className="text-text-yellow dark:text-primary-light text-2xl mr-4"/>
                <div>
                  <h4 className="font-semibold text-text-yellow hover:text-text-lightYellow dark:text-primary-light">{t('contactPage.info.consultationTitle')}</h4>
                  <a href='https://calendly.com/kan-guroo/15min?month=2025-09' className="text-text-yellow hover:text-text-lightYellow dark:text-primary-light hover:underline">{t('contactPage.info.consultationText')}</a>
                </div>
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold mt-12 mb-1">{t('contactPage.info.socialTitle')}</h3>
            <div className="w-16 h-1 bg-primary mb-8 rounded"></div>
            <SocialLinks />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;