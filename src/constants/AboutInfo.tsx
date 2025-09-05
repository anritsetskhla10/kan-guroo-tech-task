import otari from '../assets/otari.jpeg';
import saba from '../assets/saba.jpeg';
import lasha from '../assets/lasha.jpg';

export const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const baseIconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
      delay: 0.3,
    },
  },
};


const flyOnHover = { hover: { y: -20, rotate: -10, transition: { type: 'spring', stiffness: 300 } } };
const spinOnHover = { hover: { rotateY: 360, transition: { duration: 0.7, ease: 'easeInOut' } } };
const pulseOnHover = { hover: { scale: [1, 1.15, 1], transition: { duration: 0.5, ease: 'easeInOut' } } };
const glowOnHover = { hover: { scale: 1.1, filter: 'drop-shadow(0 0 8px #f3a712)', transition: { duration: 0.3 } } };

const bookBounceOnHover = { hover: { y: -5, transition: { type: 'spring', stiffness: 300 } } };
const planeWiggleOnHover = { hover: { x: [0, 5, -5, 5, 0], transition: { duration: 0.5 } } }; 
const personScaleOnHover = { hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } } };
const speechBubbleOnHover = { hover: { rotate: [0, 15, -15, 15, 0], transition: { duration: 0.5 } } };

export const animationVariantsMap = {
  fly: flyOnHover,
  spin: spinOnHover,
  pulse: pulseOnHover,
  glow: glowOnHover,
  bookBounce: bookBounceOnHover, 
  planeWiggle: planeWiggleOnHover, 
  personScale: personScaleOnHover, 
  speechBubble: speechBubbleOnHover, 
  default: pulseOnHover,
};

type AnimationType = keyof typeof animationVariantsMap;

type MissionItem = {
  icon: string;
  title: string;
  description: string;
  animationType: AnimationType;
};


type OfferItem = {
    icon: string;
    title: string;
    points: string[];
    animationType: AnimationType; 
}


export const missionData = [
  { icon: '🌍', animationType: 'spin' as AnimationType },
  { icon: '🚀', animationType: 'fly' as AnimationType },
  { icon: '🤝', animationType: 'pulse' as AnimationType },
  { icon: '💡', animationType: 'glow' as AnimationType },
];
export const offerData = [ 
  { icon: '📚', animationType: 'bookBounce' as AnimationType },
  { icon: '✈️', animationType: 'planeWiggle' as AnimationType },
  { icon: '👨‍🏫', animationType: 'personScale' as AnimationType },
  { icon: '🗣️', animationType: 'speechBubble' as AnimationType },
];

export const teamData = [
  { img: otari },
  { img: saba },
  { img: lasha },
];