import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { staggeredContainer } from '../constants/AboutInfo'; 
import { fadeInUp } from './SectionTitle';

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/people/Kan-Guroo/61557089793706/',
    icon: FaFacebookF,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kan__guroo/',
    icon: FaInstagram,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@kan-guroo',
    icon: FaYoutube,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@kan_gur00',
    icon: FaTiktok,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/kan-guroo/',
    icon: FaLinkedinIn,
  },
];

const SocialLinks: React.FC = () => {
  return (
    <motion.div
      variants={staggeredContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex space-x-2"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          variants={fadeInUp}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="p-3 rounded-full transition-colors 
                     bg-gray-200 text-gray-800 hover:bg-primary hover:text-white
                     dark:bg-primary-darkest dark:text-white dark:hover:bg-primary"
        >
          <link.icon />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;