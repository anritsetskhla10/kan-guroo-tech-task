import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail, FiClock } from 'react-icons/fi';

interface ExternalLink {
  type: 'a';
  href: string;
  text?: string;
  icon: JSX.Element;
  translationKey?: string;
}

interface InternalLink {
  type: 'link';
  to: string;
  translationKey: string;
  icon: JSX.Element;
}
type ContactItem = ExternalLink | InternalLink;


export const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://tiktok.com", icon: <FaTiktok /> },
  { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
];
export const quickLinks = [
  { to: "/", translationKey: "footer.quickLinks.home" },
  { to: "/about", translationKey: "footer.quickLinks.about" },
  { to: "/programs", translationKey: "footer.quickLinks.programs" },
  { to: "/for-schools", translationKey: "footer.quickLinks.forSchools" },
  { to: "/mentorship", translationKey: "footer.quickLinks.mentorship" },
  { to: "/contact", translationKey: "footer.quickLinks.contact" },
];
export const programLinks = [
  { to: "/study-abroad", translationKey: "footer.programLinks.studyAbroad" },
  { to: "/language-courses", translationKey: "footer.programLinks.languageCourses" },
  { to: "/summer-schools", translationKey: "footer.programLinks.summerSchools" },
  { to: "/scholarships", translationKey: "footer.programLinks.scholarships" },
];

export const contactItems: ContactItem[] = [
  { type: 'a', href: "tel:+995577302525", text: "+995 577 30 25 25", icon: <FiPhone /> },
  { type: 'a', href: "mailto:info@kan-guroo.com", text: "info@kan-guroo.com", icon: <FiMail /> },
  { type: 'a', href: "https://calendly.com/kan-guroo/15min?month=2025-09", translationKey: "footer.contactItems.bookConsultation", icon: <FiClock /> },
];

export const programs = [
  {
    icon: '🏫',
    title: 'School Exchange Programs',
    description: 'Discover school exchange programs around the world',
  },
  {
    icon: '🎓',
    title: 'University Programs',
    description: 'Study at top universities worldwide',
  },
  {
    icon: '☀️',
    title: 'Summer Schools',
    description: 'Spend your summer wisely and gain new skills',
  },
  {
    icon: '🗣️',
    title: 'Language Courses',
    description: 'Learn foreign languages with professionals',
  },
];
