import { motion } from 'framer-motion';
import SectionTitle, { fadeInUp } from '../components/SectionTitle';
import { animationVariantsMap, baseIconVariants, missionData, offerData, staggeredContainer, teamData } from '../constants/AboutInfo';
import { useTranslation } from 'react-i18next'; 

const AboutUsPage = () => {
  const { t } = useTranslation();

  const translatedMissionData = missionData.map((item, index) => ({
    ...item,
    title: t(`aboutPage.mission.cards.${index}.title`),
    description: t(`aboutPage.mission.cards.${index}.description`),
  }));

  const translatedOfferData = offerData.map((item, index) => ({
    ...item,
    title: t(`aboutPage.offer.cards.${index}.title`),
    points: t(`aboutPage.offer.cards.${index}.points`, { returnObjects: true }) as string[],
  }));

  const translatedTeamData = teamData.map((member, index) => ({
    ...member, 
    name: t(`aboutPage.team.names.${index}`), 
    role: t(`aboutPage.team.roles.${index}`),  
  }));
  return (
    <div className="dark:bg-primary-lightest bg-primary-mintgreen">
      {/* Hero სექცია */}
      <section className="relative h-[60vh] bg-primary flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] z-50"></div>
        <div className="relative z-10 p-4">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold"
          >
            {t('aboutPage.hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-4 text-lg"
          >
            {t('aboutPage.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* ჩვენი მისიის სექცია */}
      <section className="py-16 md:pb-24 md:pt-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{t('aboutPage.mission.title')}</SectionTitle>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl mx-auto text-black mb-12"
          >
            {t('aboutPage.mission.description')}
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {translatedMissionData.map(item => {
              const specificHoverVariant = animationVariantsMap[item.animationType] || animationVariantsMap.default;
              const finalIconVariants = { ...baseIconVariants, ...specificHoverVariant };

              return (
                <motion.div 
                  key={item.title} 
                  variants={fadeInUp} 
                  whileHover="hover"
                  className="bg-white p-6 rounded-2xl shadow-md text-center cursor-pointer"
                >
                  <motion.div
                    className="text-4xl mb-4 inline-block"
                    variants={finalIconVariants}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-main mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* რას გთავაზობთ სექცია */}
      <section className="py-16 md:pb-24 md:pt-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{t('aboutPage.offer.title')}</SectionTitle>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {translatedOfferData.map(item => {
              const specificHoverVariant = animationVariantsMap[item.animationType] || animationVariantsMap.default;
              const finalIconVariants = { ...baseIconVariants, ...specificHoverVariant };
              return (
                  <motion.div 
                    key={item.title} 
                    variants={fadeInUp}
                    whileHover="hover" 
                    className="bg-light-gray p-6 rounded-2xl cursor-pointer h-full flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      <motion.span 
                        className="text-3xl mr-4"
                        variants={finalIconVariants}
                      >
                        {item.icon}
                      </motion.span>
                      <h3 className="text-xl font-bold text-text-main">{item.title}</h3>
                    </div>
                    <ul className="space-y-2 text-left flex-grow">
                      {item.points.map((point, i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start">
                          <span className="text-primary mr-2 mt-1">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ჩვენი გუნდის სექცია */}
      <section className="py-16 md:pb-24 md:pt-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>{t('aboutPage.team.title')}</SectionTitle>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="text-center max-w-3xl mx-auto text-black mb-12"
            >
              {t('aboutPage.team.description')}
            </motion.p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            {translatedTeamData.map(member => (
              <motion.div 
                key={member.name} 
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white p-6 rounded-2xl shadow-md text-center cursor-pointer"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-inner">
                  <motion.img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-xl font-bold text-text-main">{member.name}</h3>
                <p className="text-primary-dark">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;